import "../index.css";
import {
  CustomMultipleCombobox,
  MultipleComboboxProps,
  Option,
} from "../components/CustomMultipleCombobox"; // Sesuaikan dengan path komponen Anda

import { useArgs } from "@storybook/client-api";

export default {
  title: "Components/CustomMultipleCombobox", // Judul story di Storybook
  component: CustomMultipleCombobox, // Komponen yang akan didokumentasikan
  argTypes: {
    onSelect: { action: "selected" }, // Aksi untuk event onSelect
    multiple: { control: "boolean" }, // Kontrol untuk prop multiple
    withSearch: { control: "boolean" }, // Kontrol untuk prop withSearch
  },
};

// Template untuk story
const Template = (args: MultipleComboboxProps) => (
  <CustomMultipleCombobox {...args} />
);

// Story default
export const Default = Template.bind({});
Default.args = {
  options: [
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
  ],
  onSelect: (selectedItems: Option[]) =>
    console.log("Selected Items:", selectedItems),
  multiple: true,
  withSearch: true,
};
