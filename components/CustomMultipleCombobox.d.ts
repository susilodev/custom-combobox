import { default as React } from '../../node_modules/react';
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
export declare function CustomMultipleCombobox({ options, onSelect, multiple, withSearch, ...rest }: MultipleComboboxProps): React.JSX.Element;
