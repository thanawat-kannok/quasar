const routes = [
  {
    path: "/",
    component: () => import("layouts/login.vue"),
  },

  {
    path: "/main",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/subject",
        component: () => import("pages/course/subject/subject.vue"),
      },
      {
        path: "/add_subject",
        component: () => import("pages/course/subject/add_subject.vue"),
      },
      {
        path: "/group",
        component: () => import("pages/course/subject/group.vue"),
      },
      {
        path: "/student_activities",
        component: () => import("pages/course/subject/student_activities.vue"),
      },
      {
        path: "/course_of_study",
        component: () => import("pages/course/subject/course_of_study.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
