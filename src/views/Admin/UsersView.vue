<template>
  <NavAdmin />
  <div class="users_container" @click="closeAllMenus">
    <SidebarView />
    <div class="users_content">
      <div class="top_content">
        <h1>Users</h1>
        <button class="btn_add" @click="openCreateUserModal">+ Add User</button>
      </div>
      <div class="search_box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search Users here..."
        />
        <i class="fa fa-search"></i>
      </div>
      <div class="bottom_content">
        <div class="table_container">
          <table>
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in filteredUsers" :key="user.id">
                <td>
                  <img :src="user.profile" alt="Profile" class="profile_img" />
                </td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td class="actions" @click.stop>
                  <i class="fa fa-ellipsis-v" @click="toggleMenu(user.id)"></i>
                  <div v-if="isMenuOpen(user.id)" class="menu">
                    <i class="fa fa-eye" @click="viewUser(user)"></i>
                    <i class="fa fa-pencil" @click="editUser(user)"></i>
                    <i class="fa fa-trash" @click="confirmDelete(user.id)"></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- View User Modal -->
    <userModal :isOpen="isViewModalOpen" @close="closeModal">
      <h2>View User</h2>
      <p><strong>Name:</strong> {{ selectedUser.name }}</p>
      <p><strong>Email:</strong> {{ selectedUser.email }}</p>
      <img :src="selectedUser.profile" alt="Profile" class="profile_img" />
    </userModal>

    <!-- Edit User Modal -->
    <userModal :isOpen="isEditModalOpen" @close="closeModal">
      <h2>Edit User</h2>
      <input
        class="name_edit"
        v-model="selectedUser.name"
        placeholder="Enter new name"
      />
      <input
        class="email_edit"
        v-model="selectedUser.email"
        placeholder="Enter new email"
      />
      <button class="saveUser" @click="saveUser">Save</button>
    </userModal>

    <!-- Create User Modal -->
    <userModal :isOpen="isCreateModalOpen" @close="closeCreateUserModal">
      <h2>Create User</h2>
      <input
        class="name_create"
        v-model="newUser.name"
        placeholder="Enter name"
      />
      <input
        class="email_create"
        v-model="newUser.email"
        placeholder="Enter email"
      />
      <div class="group_btn">
        <button class="saveUser" @click="createUser">Create</button>
      </div>
    </userModal>
  </div>
</template>

<script>
import NavAdmin from "../../components/Admin/NavBar.vue";
import SidebarView from "../../components/Admin/SideBar.vue";
import userModal from "../../components/Admin/Modal.vue";

export default {
  name: "UserView",
  components: {
    NavAdmin,
    SidebarView,
    userModal,
  },
  data() {
    return {
      searchQuery: "",
      users: [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          profile: "https://via.placeholder.com/50/ff6347",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          profile: "https://via.placeholder.com/50/4682b4",
        },
        {
          id: 3,
          name: "Alice Johnson",
          email: "alice.johnson@example.com",
          profile: "https://via.placeholder.com/50/daa520",
        },
        {
          id: 4,
          name: "Bob Brown",
          email: "bob.brown@example.com",
          profile: "https://via.placeholder.com/50/32cd32",
        },
        {
          id: 5,
          name: "Charlie Davis",
          email: "charlie.davis@example.com",
          profile: "https://via.placeholder.com/50/ff4500",
        },
      ],
      activeMenu: null,
      selectedUser: null,
      newUser: {
        name: "",
        email: "",
      },
      isViewModalOpen: false,
      isEditModalOpen: false,
      isCreateModalOpen: false,
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) => {
        const query = this.searchQuery.toLowerCase();
        return (
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
        );
      });
    },
  },
  methods: {
    toggleMenu(userId) {
      this.activeMenu = this.activeMenu === userId ? null : userId;
    },
    isMenuOpen(userId) {
      return this.activeMenu === userId;
    },
    closeAllMenus() {
      this.activeMenu = null;
    },
    viewUser(user) {
      this.selectedUser = { ...user };
      this.isViewModalOpen = true;
    },
    editUser(user) {
      this.selectedUser = { ...user };
      this.isEditModalOpen = true;
    },
    confirmDelete(userId) {
      const confirmed = window.confirm(
        "Are you sure you want to delete this user?"
      );
      if (confirmed) {
        this.deleteUser(userId);
      }
    },
    deleteUser(userId) {
      this.users = this.users.filter((user) => user.id !== userId);
    },
    openCreateUserModal() {
      this.isCreateModalOpen = true;
    },
    closeCreateUserModal() {
      this.isCreateModalOpen = false;
    },
    createUser() {
      if (!this.newUser.name || !this.newUser.email) {
        alert("Please enter both name and email.");
        return;
      }
      const newUser = {
        id: this.users.length + 1,
        name: this.newUser.name,
        email: this.newUser.email,
        profile: "https://via.placeholder.com/50/000000",
      };
      this.users.push(newUser);
      this.closeCreateUserModal();
    },
    closeModal() {
      this.isViewModalOpen = false;
      this.isEditModalOpen = false;
    },
    saveUser() {
      const index = this.users.findIndex(
        (user) => user.id === this.selectedUser.id
      );
      if (index !== -1) {
        this.users[index] = { ...this.selectedUser };
      }
    //   this.closeModal();
    },
  },
};
</script>

<style scoped>
.users_container {
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 40px;
  padding-top: 50px;
  background-color: #f0f0f0;
}
.users_content {
  display: flex;
  flex-direction: column;
  width: 78%;
  margin-left: 320px;
  margin-top: 50px;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 20px;
  height: 625px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.top_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.btn_add {
  background-color: #f6520b;
  color: #fff;
  border: none;
  border-radius: 30px;
  width: 200px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.btn_add:hover {
  background-color: #42054a;
  color: #fff;
  transition: background-color 0.3s ease-in-out;
}

.search_box {
  margin-right: 20px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 40px;
  background-color: #e0e0e0;
  width: 500px;
  padding: 10px;
}

.search_box input {
  color: #001f54;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  padding-left: 10px;
}

.search_box i {
  position: absolute;
  right: 10px;
  font-size: 18px;
  cursor: pointer;
  color: #001f54;
}

.search_box i:hover {
  color: #0a1cdf;
  transition: color 0.3s ease;
  transform: scale(1.2);
}

.table_container {
  margin-top: 50px;
  max-width: 1300px;
  margin-bottom: 20px;
  height: 400px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: #ffffff;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}
table thead tr th {
  background-color: #f6520b;
  color: #fff;
  padding: 15px;
}
th,
td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.profile_img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.actions {
  position: relative;
  text-align: center;
}

.fa-ellipsis-v {
  cursor: pointer;
  font-size: 18px;
}

.menu {
  position: absolute;
  top: 20px;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  padding: 10px;
  z-index: 10;
}

.menu i {
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
}

.menu i:hover {
  background-color: #f0f0f0;
  border-radius: 3px;
}
.saveUser {
  margin-top: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 5px 10px;
  width: 100px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.name_edit,
.email_edit,
.name_create,
.email_create {
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  border-radius: 20px;
  outline: none;
}
</style>
