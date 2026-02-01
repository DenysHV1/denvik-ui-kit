export const argTypes = {
  variant: {
    control: "select",
    options: ["primary", "secondary", "outline", "ghost", "destructive", "link"],
  },
  size: {
    control: "select",
    options: ["sm", "md", "lg", "icon"],
  },
  fullWidth: { control: "boolean" },
  loading: { control: "boolean" },
  disabled: { control: "boolean" },
  hideSpinner: { control: "boolean" },
  asChild: { control: "boolean" },

  leftIcon: { control: false },
  rightIcon: { control: false },

  onClick: { action: "clicked" },
} as const;
