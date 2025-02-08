import { useState } from "react";

import {
  CustomMultipleCombobox,
  Option,
} from "./components/CustomMultipleCombobox";

const options = [
  { value: "option-1", label: "Option 1" },
  { value: "option-with-icon", label: "Option with icon" },
  { value: "long-long-option-3", label: "Long Long option 3" },
  { value: "long-long-long-option-4", label: "Long Long Long option 4" },
  {
    value: "long-long-long-long-option-5",
    label: "Long Long Long Long option 5",
  },
  {
    value: "long-long-long-long-long-option-6",
    label: "Long Long Long  Long option 6",
  },
];

export default function App() {
  const [selectedItems, setSelectedItems] = useState<Option[] | null>(null);

  const handleSelect = (selectedItem: Option[]) => {
    setSelectedItems(selectedItem); // Simpan nilai yang dipilih ke state
  };

  console.log("Selected Items:", selectedItems); // Cetak ke console untuk debugging

  return (
    <div className="flex flex-col items-start justify-start min-h-screen  w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 mt-16">Select Dropdown Field</h1>
      <CustomMultipleCombobox
        options={options}
        onSelect={handleSelect}
        multiple={false}
        withSearch={false}
      />
    </div>
  );
}
