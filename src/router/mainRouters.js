const mainRouters = [
    {
        path: "/list",
        name: "list",
        component: () => import("../components/List.vue")
    }
];
export default mainRouters;