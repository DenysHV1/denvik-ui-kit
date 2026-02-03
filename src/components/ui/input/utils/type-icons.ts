import type * as React from "react";
import {
  FiCalendar,
  FiClock,
  FiHash,
  FiLink,
  FiMail,
  FiPhone,
  FiSearch,
} from "react-icons/fi";

type TypeIcon = React.ComponentType<{ className?: string }>;

export const typeIconMap: Partial<Record<React.HTMLInputTypeAttribute, TypeIcon>> = {
  email: FiMail,
  search: FiSearch,
  tel: FiPhone,
  url: FiLink,
  date: FiCalendar,
  datetimeLocal: FiCalendar,
  time: FiClock,
  number: FiHash,
};
