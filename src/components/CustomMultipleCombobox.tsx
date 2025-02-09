import React from "react";
import { useState, useMemo, useEffect, useRef } from "react";
import { useCombobox, useMultipleSelection, useSelect } from "downshift";
import { cn } from "../utils/cn";
import { ChevronDown, CircleX, X } from "lucide-react";

export interface Option {
  value: string;
  label: string;
}

const highlightText = (text: string, query: string) => {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, '<mark class="bg-green-300">$1</mark>');
};

export interface MultipleComboboxProps {
  options: Option[];
  onSelect: (selectedItems: Option[]) => void;
  onClick?: () => void;
  multiple?: boolean;
  withSearch?: boolean;
}

export function CustomMultipleCombobox({
  options,
  onSelect,
  multiple = true,
  withSearch = true,
  ...rest
}: MultipleComboboxProps) {
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState<Option[]>([]);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo(
    () =>
      options.filter((item) =>
        item.label.toLowerCase().includes(inputValue.toLowerCase())
      ),
    [inputValue, options]
  );

  const { getSelectedItemProps, removeSelectedItem, getDropdownProps } =
    useMultipleSelection({
      selectedItems,
      onStateChange({ selectedItems: newSelectedItems, type }) {
        switch (type) {
          case useMultipleSelection.stateChangeTypes
            .SelectedItemKeyDownBackspace:
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

  const resetSelectedItems = () => {
    setSelectedItems([]);
    onSelect([]);
  };
  const {
    isOpen: isComboboxOpen,
    getToggleButtonProps: getComboboxToggleButtonProps,
    getMenuProps: getComboboxMenuProps,
    getInputProps,
    highlightedIndex: comboboxHighlightedIndex,
    getItemProps: getComboboxItemProps,
  } = useCombobox({
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
    onStateChange: ({
      inputValue: newInputValue,
      type,
      selectedItem: newSelectedItem,
    }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          if (newSelectedItem) {
            if (multiple) {
              setSelectedItems([...selectedItems, newSelectedItem]);
              onSelect([...selectedItems, newSelectedItem]);
            } else {
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

  const {
    isOpen: isSelectOpen,
    getToggleButtonProps: getSelectToggleButtonProps,
    getMenuProps: getSelectMenuProps,
    highlightedIndex: selectHighlightedIndex,
    getItemProps: getSelectItemProps,
  } = useSelect({
    items: options,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      if (newSelectedItem) {
        if (multiple) {
          setSelectedItems([...selectedItems, newSelectedItem]);
          onSelect([...selectedItems, newSelectedItem]);
        } else {
          setSelectedItems([newSelectedItem]);
          onSelect([newSelectedItem]);
        }
      }
    },
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
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

  return (
    <>
      <div
        className="w-full flex flex-col bg-white h-auto z-[1002] relativea "
        ref={wrapperRef}
        {...rest}
      >
        <div
          className="relative w-full cursor-pointer"
          onClick={() => {
            if (withSearch) {
              setShowSearchInput(true);
              setTimeout(() => {
                inputRef.current?.focus();
              }, 0);
            }
          }}
        >
          <div
            {...(withSearch
              ? getComboboxToggleButtonProps()
              : getSelectToggleButtonProps())}
            aria-label="toggle menu"
            className="flex items-center border border-slate-300 bg-white rounded-md px-3 py-2 focus-within:shadow-sm focus-within:ring-slate-300 h-10 debug-red"
          >
            <div className="flex-1 overflow-x-auto scrollbar-hide">
              <div className="flex gap-1 whitespace-nowrap">
                {selectedItems.map((selectedItem, index) => (
                  <span
                    key={`selected-item-${index}`}
                    className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs flex items-center gap-1 flex-shrink-0"
                    {...getSelectedItemProps({
                      selectedItem,
                      index,
                    })}
                  >
                    {selectedItem.label}
                    <CircleX
                      onClick={(e) => {
                        e.stopPropagation();
                        removeSelectedItem(selectedItem);
                      }}
                      className={cn(
                        "w-3 h-3 cursor-pointer text-gray-500 hover:text-gray-700",
                        !multiple && "hidden"
                      )}
                    />
                  </span>
                ))}
              </div>
            </div>
            <X
              onClick={(e) => {
                e.stopPropagation();
                resetSelectedItems();
              }}
              className={cn(
                "h-4 w-4 bg-gray-400 p-1 rounded-full cursor-pointer text-slate-100 hover:text-white hover:bg-gray-600",
                (withSearch || selectedItems.length === 0) && "hidden"
              )}
            />
            <ChevronDown
              className={cn(
                "ml-2 cursor-pointer text-xs outline-none focus:outline-none",
                isFocused ? "text-slate-500" : "text-slate-300"
              )}
            />
          </div>

          {/* Select Dropdown (without search) */}
          <div {...getSelectToggleButtonProps()}>
            <ul
              {...getSelectMenuProps()}
              className={cn(
                "absolute bg-white z-max left-0 w-full border border-gray-300 pt-1 rounded-bl-md rounded-br-md overflow-hidden",
                !isSelectOpen || withSearch ? "hidden" : ""
              )}
            >
              {options.map((item, index) => (
                <li
                  key={item.value}
                  {...getSelectItemProps({ item, index })}
                  className={cn(
                    "px-4 py-2 cursor-pointer hover:bg-green-100/70 transition",
                    selectHighlightedIndex === index && "bg-green-50/80",
                    selectedItems.some(
                      (selected) => selected.value === item.value
                    ) && "font-semibold text-gray-900"
                  )}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Search Combobox */}
          <div
            className={cn(
              "relative w-full mt-2 z-max",
              !withSearch || !showSearchInput ? "hidden" : ""
            )}
          >
            <div
              onFocus={handleFocus}
              onBlur={() => {
                handleBlur();
                setShowSearchInput(false);
              }}
              className="flex items-center border border-slate-300 bg-white rounded-md px-3 py-2 focus-within:shadow-sm focus-within:ring-slate-300"
            >
              <input
                {...getInputProps(
                  getDropdownProps({
                    placeholder: "Search...",
                    className:
                      "flex-1 bg-transparent outline-none min-w-[100px]",
                    ref: inputRef,
                    preventKeyAction: isComboboxOpen,
                  })
                )}
              />
              <X
                onClick={() => setInputValue("")}
                className="h-4 w-4 bg-gray-400 p-1 rounded-full cursor-pointer text-slate-100 hover:text-white hover:bg-gray-600"
              />
            </div>

            {/* Dropdown List */}
            <div {...getComboboxToggleButtonProps()}>
              <ul
                {...getComboboxMenuProps()}
                className={cn(
                  "absolute left-0 w-full bg-white border border-gray-300 pt-2 rounded-bl-md rounded-br-md overflow-hidden z-[1000]",
                  !isComboboxOpen && "hidden"
                )}
              >
                {items.map((item, index) => (
                  <li
                    key={item.value}
                    {...getComboboxItemProps({ item, index })}
                    className={cn(
                      "px-4 py-2 cursor-pointer hover:bg-green-100/70 transition",
                      comboboxHighlightedIndex === index && "bg-green-50/80",
                      selectedItems.some(
                        (selected) => selected.value === item.value
                      ) && "font-semibold text-gray-900"
                    )}
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightText(item.label, inputValue),
                      }}
                    />
                  </li>
                ))}

                {items.length === 0 && (
                  <li className="justify-center w-full mx-auto text-center text-slate-400 p-2">
                    No options
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
