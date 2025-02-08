export interface Option {
    value: string;
    label: string;
}
export interface MultipleComboboxProps {
    options: Option[];
    onSelect: (selectedItems: Option[]) => void;
    onClick?: () => void;
    multiple?: boolean;
    withSearch?: boolean;
}
export declare function CustomMultipleCombobox({ options, onSelect, multiple, withSearch, // Default value untuk withSearch adalah true
...rest }: MultipleComboboxProps): import("react/jsx-runtime").JSX.Element;
