export type MenuItem =
    | { key: string; type: "link"; href: string; labelKey: string }
    | { key: string; type: "anchor"; href: string; labelKey: string }
    | { key: string; type: "button"; labelKey: string; href?: undefined };

export const menuItems = [
    {
        key: "about",
        type: "link" as const,
        href: "#aboutUs",
        labelKey: "about",
    },
    {
        key: "services",
        type: "link" as const,
        href: "#services",
        labelKey: "services",
    },
    {
        key: "solutions",
        type: "link" as const,
        href: "#solutions",
        labelKey: "solutions",
    },
    {
        key: "projects",
        type: "link" as const,
        href: "#projects",
        labelKey: "projects",
    },
    {
        key: "reviews",
        type: "link" as const,
        href: "#reviews",
        labelKey: "reviews",
    },
    {
        key: "contact",
        type: "link" as const,
        href: "#contact",
        labelKey: "contact",
    },
];

export const isHrefItem = (
    item: MenuItem,
): item is Extract<MenuItem, { href: string }> => item.type !== "button";
