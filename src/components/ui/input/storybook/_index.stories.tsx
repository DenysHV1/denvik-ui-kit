import * as React from "react";
import type { StoryMeta, Story } from "./types";
import { decorators } from "./decorators";
import { docs } from "./docs";

import { Input } from "../input";
import { FiInfo, FiMail, FiSearch } from "react-icons/fi";

const meta: StoryMeta = {
	title: "UI/Input",
	component: Input,
	decorators,
	parameters: {
		docs: {
			description: {
				component: docs.description,
			},
		},
	},
	args: {
		label: "Label",
		placeholder: "Введите значение",
		variant: "solid",
		size: "md",
		tone: "default",
		disabled: false,
		loading: false,
		clearable: false,
		showTypeIcon: true,
		allowPasswordToggle: true,
	},
	argTypes: {
		variant: { control: "radio", options: ["solid", "soft", "ghost"] },
		size: { control: "radio", options: ["sm", "md", "lg"] },
		tone: { control: "radio", options: ["default", "success", "warning", "danger"] },

		label: { control: "text" },
		helperText: { control: "text" },
		message: { control: "text" },

		disabled: { control: "boolean" },
		readOnly: { control: "boolean" },
		loading: { control: "boolean" },

		clearable: { control: "boolean" },
		showTypeIcon: { control: "boolean" },
		allowPasswordToggle: { control: "boolean" },

		type: {
			control: "select",
			options: [
				"text",
				"email",
				"search",
				"password",
				"tel",
				"url",
				"number",
				"date",
				"time",
			],
		},

		leftIcon: { control: false },
		rightIcon: { control: false },
		slots: { control: false },
		onClear: { action: "onClear" },
		onChange: { action: "onChange" },
	},
};
export default meta;

export const Playground: Story = {};

export const States: Story = {
	render: () => (
		<div style={{ display: "grid", gap: 12 }}>
			<Input label="Default" placeholder="..." />
			<Input label="Disabled" placeholder="..." disabled />
			<Input label="ReadOnly" defaultValue="Только чтение" readOnly />
			<Input label="Loading" placeholder="..." loading />
			<Input label="With helperText" helperText="Подсказка под полем" placeholder="..." />
			<Input label="With message (danger)" tone="danger" aria-invalid message="Ошибка: проверьте значение" />
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: "grid", gap: 12 }}>
			<Input label="sm" size="sm" placeholder="Small" />
			<Input label="md" size="md" placeholder="Medium" />
			<Input label="lg" size="lg" placeholder="Large" />
		</div>
	),
};

export const Variants: Story = {
	render: () => (
		<div style={{ display: "grid", gap: 12 }}>
			<Input label="solid" variant="solid" placeholder="..." />
			<Input label="soft" variant="soft" placeholder="..." />
			<Input label="ghost" variant="ghost" placeholder="..." />
		</div>
	),
};

export const Tones: Story = {
	render: () => (
		<div style={{ display: "grid", gap: 12 }}>
			<Input label="default" tone="default" placeholder="..." />
			<Input label="success" tone="success" placeholder="..." message="Готово" />
			<Input label="warning" tone="warning" placeholder="..." message="Проверьте данные" />
			<Input label="danger" tone="danger" aria-invalid placeholder="..." message="Ошибка" />
		</div>
	),
};

export const WithIcons: Story = {
	render: () => (
		<div style={{ display: "grid", gap: 12 }}>
			<Input label="Left icon" leftIcon={<FiInfo />} placeholder="..." />
			<Input label="Right icon" rightIcon={<FiInfo />} placeholder="..." />
			<Input label="Type icon (email)" type="email" placeholder="name@example.com" />
			<Input label="Custom icon + type" type="search" leftIcon={<FiSearch />} placeholder="Поиск..." />
			<Input label="Disable type icon" type="email" showTypeIcon={false} leftIcon={<FiMail />} placeholder="name@example.com" />
		</div>
	),
};

export const Password: Story = {
	render: () => (
		<div style={{ display: "grid", gap: 12 }}>
			<Input label="Password (toggle)" type="password" placeholder="••••••••" />
			<Input label="Password (no toggle)" type="password" allowPasswordToggle={false} placeholder="••••••••" />
		</div>
	),
};

const Clear = () => {
	const [v, setV] = React.useState("Очисти меня");
	return (
		<Input
			label="Controlled + clearable"
			value={v}
			onChange={(e) => setV(e.currentTarget.value)}
			clearable
			onClear={() => setV("")}
		/>
	);
}

export const Clearable: Story = {
	render: () => <Clear />
};
