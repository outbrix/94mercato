import { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, Package, ArrowUpRight, ArrowDownRight, RefreshCcw } from "lucide-react";
import api from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { formatDistanceToNow } from "date-fns";

interface AdminTransaction {
  id: number;
  type: string;
  amount_cents: number;
  description: string;
  reference_id: string;
  created_at: string;
}

interface EarningsData {
  transactions: AdminTransaction[];
  totals: {
    overall: number;
    subscriptions: number;
    products: number;
  };
}

export default function AdminEarnings() {
  const [data, setData] = useState<EarningsData | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchEarnings = async () => {
    try {
      setLoading(true);
      const res = await api.get('/admin/earnings');
      setData(res.data);
    } catch (err) {
      toast({
        title: "Error fetching earnings",
        description: "Could not load transaction data.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEarnings();
  }, []);

  const formatCurrency = (cents: number) => {
    return (cents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" });
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'subscription':
        return <ArrowUpRight className="h-4 w-4 text-green-500" />;
      case 'product_commission':
        return <Package className="h-4 w-4 text-blue-500" />;
      default:
        return <ArrowDownRight className="h-4 w-4" />;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-serif text-cream">Earnings & Transactions</h1>
          <button 
            onClick={fetchEarnings}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-sapphire/20 text-cream rounded-md hover:bg-sapphire/40 transition disabled:opacity-50"
          >
            <RefreshCcw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="bg-elevation-1 border-sapphire/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-cream/70">Total Revenue</CardTitle>
              <Wallet className="h-4 w-4 text-champagne" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-cream">
                {formatCurrency(data?.totals?.overall || 0)}
              </div>
              <p className="text-xs text-cream/50 mt-1">Lifetime platform earnings</p>
            </CardContent>
          </Card>
          
          <Card className="bg-elevation-1 border-sapphire/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-cream/70">Subscription Income</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-cream">
                {formatCurrency(data?.totals?.subscriptions || 0)}
              </div>
              <p className="text-xs text-cream/50 mt-1">From Creator Pro upgrades</p>
            </CardContent>
          </Card>

          <Card className="bg-elevation-1 border-sapphire/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-cream/70">Commission Income</CardTitle>
              <Package className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-cream">
                {formatCurrency(data?.totals?.products || 0)}
              </div>
              <p className="text-xs text-cream/50 mt-1">From product sales splits</p>
            </CardContent>
          </Card>
        </div>

        {/* Transactions Table */}
        <Card className="bg-elevation-1 border-sapphire/20">
          <CardHeader>
            <CardTitle className="text-cream">Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-midnight border border-sapphire/30 text-cream/70">
                <TabsTrigger value="all" className="data-[state=active]:bg-sapphire/30 data-[state=active]:text-cream">All Transactions</TabsTrigger>
                <TabsTrigger value="subscriptions" className="data-[state=active]:bg-sapphire/30 data-[state=active]:text-cream">Subscriptions</TabsTrigger>
                <TabsTrigger value="commissions" className="data-[state=active]:bg-sapphire/30 data-[state=active]:text-cream">Product Commissions</TabsTrigger>
              </TabsList>

              {['all', 'subscriptions', 'commissions'].map(tab => (
                <TabsContent key={tab} value={tab} className="mt-4">
                  <div className="rounded-md border border-sapphire/20">
                    <Table>
                      <TableHeader className="bg-midnight/50">
                        <TableRow className="border-sapphire/20 hover:bg-transparent">
                          <TableHead className="text-cream/70 font-medium whitespace-nowrap">ID</TableHead>
                          <TableHead className="text-cream/70 font-medium">Type</TableHead>
                          <TableHead className="text-cream/70 font-medium">Description</TableHead>
                          <TableHead className="text-cream/70 font-medium">Date</TableHead>
                          <TableHead className="text-cream/70 font-medium text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {loading && !data ? (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-8 text-cream/50">
                              Loading transactions...
                            </TableCell>
                          </TableRow>
                        ) : data?.transactions?.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-8 text-cream/50">
                              No earnings recorded yet.
                            </TableCell>
                          </TableRow>
                        ) : (
                          data?.transactions
                            ?.filter(tx => 
                              tab === 'all' ? true : 
                              tab === 'subscriptions' ? tx.type === 'subscription' : 
                              tx.type === 'product_commission'
                            )
                            ?.map((tx) => (
                            <TableRow key={tx.id} className="border-sapphire/10 hover:bg-sapphire/5">
                              <TableCell className="text-cream/70 font-mono text-xs">
                                #{tx.id}
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  {getIcon(tx.type)}
                                  <span className="text-sm font-medium text-cream capitalize">
                                    {tx.type.replace('_', ' ')}
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <p className="text-sm text-cream/80">{tx.description}</p>
                                <p className="text-xs text-cream/40 font-mono mt-0.5" title="Reference ID">{tx.reference_id}</p>
                              </TableCell>
                              <TableCell className="text-sm text-cream/60">
                                {formatDistanceToNow(new Date(tx.created_at), { addSuffix: true })}
                              </TableCell>
                              <TableCell className="text-right font-medium text-green-400">
                                +{formatCurrency(tx.amount_cents)}
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
