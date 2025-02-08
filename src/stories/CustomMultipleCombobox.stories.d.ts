import "../index.css";
import { CustomMultipleCombobox, MultipleComboboxProps, Option } from "../components/CustomMultipleCombobox";
declare const _default: {
    title: string;
    component: typeof CustomMultipleCombobox;
    argTypes: {
        onSelect: {
            action: string;
        };
        multiple: {
            control: string;
        };
        withSearch: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: {
    args: {
        options: {
            value: string;
            label: string;
        }[];
        onSelect: (selectedItems: Option[]) => void;
        multiple: boolean;
        withSearch: boolean;
    };
    render: (args: MultipleComboboxProps) => import("react/jsx-runtime").JSX.Element;
};
