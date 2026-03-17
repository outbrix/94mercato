import * as React from "react";
import { Check, ChevronsUpDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

const POPULAR_CATEGORIES = [
    { value: "Templates", label: "Templates" },
    { value: "UI Kits", label: "UI Kits" },
    { value: "Courses", label: "Courses" },
    { value: "Mockups", label: "Mockups" },
    { value: "Icons", label: "Icons" },
    { value: "Fonts", label: "Fonts" },
    { value: "PDF Assets", label: "PDF Assets" },
    { value: "Digital Prints", label: "Digital Prints" },
    { value: "Signatures", label: "Signatures" },
    { value: "Image Collections", label: "Image Collections" },
    { value: "3D Models", label: "3D Models" },
];

interface CategorySelectorProps {
    value: string;
    onValueChange: (value: string) => void;
}

export function CategorySelector({ value, onValueChange }: CategorySelectorProps) {
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between font-normal"
                >
                    {value ? value : "Select category..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start">
                <Command>
                    <CommandInput 
                        placeholder="Search category..." 
                        value={inputValue}
                        onValueChange={setInputValue}
                    />
                    <CommandList>
                        <CommandEmpty>
                            <div className="flex flex-col items-center justify-center py-4 px-2 text-center">
                                <p className="text-sm text-muted-foreground mb-4">No category found.</p>
                                {inputValue && (
                                    <Button 
                                        type="button"
                                        variant="luxury" 
                                        size="sm"
                                        className="h-8 gap-2"
                                        onClick={() => {
                                            onValueChange(inputValue);
                                            setOpen(false);
                                        }}
                                    >
                                        <Plus className="h-3 w-3" />
                                        Use "{inputValue}"
                                    </Button>
                                )}
                            </div>
                        </CommandEmpty>
                        <CommandGroup heading="Popular Categories">
                            {POPULAR_CATEGORIES.map((category) => (
                                <CommandItem
                                    key={category.value}
                                    value={category.value}
                                    onSelect={(currentValue) => {
                                        onValueChange(currentValue === value ? "" : category.value);
                                        setOpen(false);
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === category.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {category.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                        {value && !POPULAR_CATEGORIES.some(c => c.value === value) && (
                             <CommandGroup heading="Custom Category">
                                <CommandItem
                                    value={value}
                                    onSelect={() => setOpen(false)}
                                >
                                    <Check className="mr-2 h-4 w-4 opacity-100" />
                                    {value}
                                </CommandItem>
                             </CommandGroup>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
