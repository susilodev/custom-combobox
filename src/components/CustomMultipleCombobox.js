import React from "react";
import { useState, useMemo, useEffect, useRef } from "react";
import { useCombobox, useMultipleSelection, useSelect } from "downshift";
import { cn } from "../utils/cn";
import { ChevronDown, CircleX, X } from "lucide-react";
const highlightText = (text, query) => {
    if (!query)
        return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, '<mark class="bg-green-300">$1</mark>');
};
export function CustomMultipleCombobox({ options, onSelect, multiple = true, withSearch = true, // Default value untuk withSearch adalah true
...rest }) {
    const [inputValue, setInputValue] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const wrapperRef = useRef(null);
    const inputRef = useRef(null);
    const items = useMemo(() => options.filter((item) => item.label.toLowerCase().includes(inputValue.toLowerCase())), [inputValue, options]);
    const { getSelectedItemProps, removeSelectedItem } = useMultipleSelection({
        selectedItems,
        onStateChange({ selectedItems: newSelectedItems, type }) {
            switch (type) {
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
                case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
                case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
                    setSelectedItems(newSelectedItems || []);
                    onSelect(newSelectedItems || []);
                    break;
                default:
                    break;
            }
        },
    });
    const { isOpen: isComboboxOpen, getToggleButtonProps: getComboboxToggleButtonProps, getMenuProps: getComboboxMenuProps, getInputProps, highlightedIndex: comboboxHighlightedIndex, getItemProps: getComboboxItemProps, } = useCombobox({
        items,
        itemToString: (item) => (item ? item.label : ""),
        inputValue,
        defaultHighlightedIndex: 0,
        stateReducer: (_, { changes, type }) => {
            switch (type) {
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                    return {
                        ...changes,
                        isOpen: true,
                        highlightedIndex: 0,
                    };
                default:
                    return changes;
            }
        },
        onStateChange: ({ inputValue: newInputValue, type, selectedItem: newSelectedItem, }) => {
            switch (type) {
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                    if (newSelectedItem) {
                        if (multiple) {
                            setSelectedItems([...selectedItems, newSelectedItem]);
                            onSelect([...selectedItems, newSelectedItem]);
                        }
                        else {
                            setSelectedItems([newSelectedItem]);
                            onSelect([newSelectedItem]);
                        }
                        setInputValue("");
                    }
                    break;
                case useCombobox.stateChangeTypes.InputChange:
                    setInputValue(newInputValue || "");
                    break;
                default:
                    break;
            }
        },
    });
    const { isOpen: isSelectOpen, getToggleButtonProps: getSelectToggleButtonProps, getMenuProps: getSelectMenuProps, highlightedIndex: selectHighlightedIndex, getItemProps: getSelectItemProps, } = useSelect({
        items: options,
        onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
            if (newSelectedItem) {
                if (multiple) {
                    setSelectedItems([...selectedItems, newSelectedItem]);
                    onSelect([...selectedItems, newSelectedItem]);
                }
                else {
                    setSelectedItems([newSelectedItem]);
                    onSelect([newSelectedItem]);
                }
            }
        },
    });
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current &&
                !wrapperRef.current.contains(event.target)) {
                setShowSearchInput(false);
                setIsFocused(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "w-full flex flex-col bg-white h-auto z-[1002] relativea ", ref: wrapperRef, ...rest },
            React.createElement("div", { className: "relative w-full cursor-pointer", onClick: () => {
                    if (withSearch) {
                        setShowSearchInput(true);
                        setTimeout(() => {
                            inputRef.current?.focus();
                        }, 0);
                    }
                } },
                React.createElement("div", { ...(withSearch
                        ? getComboboxToggleButtonProps()
                        : getSelectToggleButtonProps()), className: "flex items-center border border-slate-300 bg-white rounded-md px-3 py-2 focus-within:shadow-sm focus-within:ring-slate-300 h-10 debug-red" },
                    React.createElement("div", { className: "flex flex-wrap gap-1 flex-1" }, selectedItems.map((selectedItem, index) => (React.createElement("span", { key: `selected-item-${index}`, className: "bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs flex items-center gap-1", ...getSelectedItemProps({
                            selectedItem,
                            index,
                        }) },
                        selectedItem.label,
                        multiple && (React.createElement(CircleX, { onClick: (e) => {
                                e.stopPropagation();
                                removeSelectedItem(selectedItem);
                            }, className: "w-3 h-3 cursor-pointer text-gray-500 hover:text-gray-700" })))))),
                    !withSearch && selectedItems.length > 0 && (React.createElement(X, { onClick: () => {
                            removeSelectedItem(selectedItems[0]);
                        }, className: "h-4 w-4 bg-gray-400 p-1 rounded-full cursor-pointer text-slate-100 hover:text-white hover:bg-gray-600" })),
                    React.createElement(ChevronDown, { className: cn("ml-2 cursor-pointer text-xs outline-none focus:outline-none", isFocused ? "text-slate-500" : "text-slate-300") })),
                !withSearch && (React.createElement(React.Fragment, null,
                    React.createElement("ul", { ...getSelectMenuProps(), className: cn("absolute bg-white z-max left-0 w-full border border-gray-300 pt-1 rounded-bl-md rounded-br-md overflow-hidden", !isSelectOpen && "hidden") }, isSelectOpen &&
                        options.map((item, index) => (React.createElement("li", { key: item.value, ...getSelectItemProps({ item, index }), className: cn("px-4 py-2 cursor-pointer hover:bg-green-100/70 transition", selectHighlightedIndex === index && "bg-green-50/80", selectedItems.some((selected) => selected.value === item.value) && "font-semibold text-gray-900") }, item.label)))))),
                withSearch && showSearchInput && (React.createElement("div", { className: "relative w-full mt-2 z-max" },
                    React.createElement("div", { onFocus: handleFocus, onBlur: () => {
                            handleBlur();
                            setShowSearchInput(false);
                        }, className: "flex items-center border border-slate-300 bg-white rounded-md px-3 py-2 focus-within:shadow-sm focus-within:ring-slate-300" },
                        React.createElement("input", { ...getInputProps({
                                placeholder: "Search...",
                                className: "flex-1 bg-transparent outline-none min-w-[100px]",
                                ref: inputRef,
                            }) }),
                        React.createElement(X, { onClick: () => setInputValue(""), className: "h-4 w-4 bg-gray-400 p-1 rounded-full cursor-pointer text-slate-100 hover:text-white hover:bg-gray-600" })),
                    React.createElement("ul", { ...getComboboxMenuProps(), className: cn("absolute left-0 w-full bg-white border border-gray-300 pt-2 rounded-bl-md rounded-br-md overflow-hidden z-[1000]", !isComboboxOpen && "hidden") },
                        isComboboxOpen &&
                            items.map((item, index) => (React.createElement("li", { key: item.value, ...getComboboxItemProps({ item, index }), className: cn("px-4 py-2 cursor-pointer hover:bg-green-100/70 transition", comboboxHighlightedIndex === index && "bg-green-50/80", selectedItems.some((selected) => selected.value === item.value) && "font-semibold text-gray-900") },
                                React.createElement("span", { dangerouslySetInnerHTML: {
                                        __html: highlightText(item.label, inputValue),
                                    } })))),
                        isComboboxOpen && items.length === 0 && (React.createElement("li", { className: "justify-center w-full mx-auto text-center text-slate-400 p-2" }, "No options")))))))));
}
