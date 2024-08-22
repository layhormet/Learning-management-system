<template>
  <div :class="['sidebar', { collapsed }]">
    <div class="sidebar_top">
      <div
        class="dashboard"
        :class="{ active: activeMenu === 'dashboard' }"
        @click="toggleMenu('dashboard')"
      >
        <i class="fa fa-dashboard"></i>
        <span v-show="!collapsed || activeMenu === 'dashboard'">DASHBOARD</span>
      </div>
      <div
        class="course"
        :class="{ active: activeMenu === 'course' }"
        @click="toggleMenu('course')"
      >
        <i class="fa fa-book"></i>
        <span v-show="!collapsed || activeMenu === 'course'">COURSES</span>
      </div>
      <div
        class="exercise"
        :class="{ active: activeMenu === 'exercise' }"
        @click="toggleMenu('exercise')"
      >
        <i class="fa fa-pencil"></i>
        <span v-show="!collapsed || activeMenu === 'exercise'">EXERCISES</span>
      </div>
      <div
        class="users"
        :class="{ active: activeMenu === 'users' }"
        @click="toggleMenu('users')"
      >
        <i class="fa fa-users"></i>
        <span v-show="!collapsed || activeMenu === 'users'">USERS</span>
      </div>
      <div
        class="notification"
        :class="{ active: activeMenu === 'notification' }"
        @click="toggleMenu('notification')"
      >
        <i class="fa fa-bell"></i>
        <span v-show="!collapsed || activeMenu === 'notification'"
          >NOTIFICATIONS</span
        >
      </div>
    </div>
    <div class="sidebar_bottom" @click="toggleSidebar">
      <i class="fa fa-arrow-left back-icon"></i>
      <span v-show="!collapsed">BACK</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarView",
  data() {
    return {
      collapsed: true,
      activeMenu: null, // Track the active menu item
    };
  },
  methods: {
    toggleSidebar() {
      if (!this.collapsed) {
        this.activeMenu = null; // Reset activeMenu when collapsing the sidebar
      }
      this.collapsed = !this.collapsed;
    },
    toggleMenu(menu) {
      if (this.activeMenu === menu) {
        this.activeMenu = null; // Hide all text spans
        this.collapsed = true; // Collapse the sidebar
      } else {
        this.activeMenu = menu;
        this.collapsed = false; // Expand the sidebar
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #001f54;
  height: 88.5vh;
  bottom: 0;
  border-radius: 0 20px 0px 0px;
  padding-top: 20px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  transition: width 0.3s ease;
  width: 80px; /* Collapsed width */
}

.sidebar.collapsed {
  width: 80px; /* Width when collapsed */
}

.sidebar:not(.collapsed) {
  width: 300px; /* Width when expanded */
}

.sidebar_top {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 20px;
  color: white;
}

.dashboard,
.course,
.exercise,
.users,
.notification,
.sidebar_bottom {
  display: flex;
  align-items: center;
  margin-top: 30px;
  font-size: 18px;
  padding: 10px 0;
  gap: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, padding-left 0.3s ease;
}

.sidebar.collapsed .dashboard,
.sidebar.collapsed .course,
.sidebar.collapsed .exercise,
.sidebar.collapsed .users,
.sidebar.collapsed .notification,
.sidebar.collapsed .sidebar_bottom {
  justify-content: center;
}

.dashboard.active,
.course.active,
.exercise.active,
.users.active,
.notification.active {
  background-color: #ffffff;
  border-radius: 50px 0px 0px 50px;
  color: #001f54;
  padding-left: 10px;
}

.sidebar_bottom {
  display: flex;
  width: 100%;
  gap: 2rem;
  padding-left: 20px;
  font-size: 18px;
  color: white;
  margin-bottom: 20px;
}

.back-icon {
  font-size: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
}

.sidebar:not(.collapsed) span {
  display: inline;
}
</style>
