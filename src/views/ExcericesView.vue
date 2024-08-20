<template>
  <NavBar />
  <div class="container">
    <div class="sidebar">
      <div
        class="dropdown"
        v-for="(item, index) in sidebarItems"
        :key="index"
      >
        <div class="dropdown-header" @click="toggleDropdown(index)">
          <span>{{ item.title }}</span>
          <i class="fa fa-caret-down"></i>
        </div>
        <div class="dropdown-content" v-show="activeDropdown === index">
          <p v-for="(exercise, idx) in exercises" :key="idx">
            <a href="#">{{ exercise }}</a>
          </p>
        </div>
      </div>
    </div>

    <div class="content">
      <div v-for="i in 4" :key="i" class="content-section">
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <div v-if="i > 1" class="code-container">
          <pre v-if="!isEditable">
            <code>
&lt;html&gt;
&lt;head&gt;<br>
  &lt;title&gt;Page Title&lt;/title&gt;<br>
&lt;/head&gt;<br>
&lt;body&gt;<br>
  &lt;h1&gt;This is a Heading&lt;/h1&gt;<br>
  &lt;p&gt;This is a paragraph.&lt;/p&gt;<br>
&lt;/body&gt;<br>
&lt;/html&gt;
            </code>
          </pre>
          <div
            v-else
            contenteditable="true"
            ref="editableCode"
            class="editable-code"
          >
&lt;html&gt;<br>
&lt;head&gt;<br>
  &lt;title&gt;Page Title&lt;/title&gt;<br>
&lt;/head&gt;<br>
&lt;body&gt;<br>
  &lt;h1&gt;This is a Heading&lt;/h1&gt;<br>
  &lt;p&gt;This is a paragraph.&lt;/p&gt;<br>
&lt;/body&gt;<br>
&lt;/html&gt;
          </div>
          <button @click="makeEditable">Try yourself</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: { NavBar },
  data() {
    return {
      sidebarItems: [
        { title: "HTML" },
        { title: "CSS" },
        { title: "JavaScript" },
        { title: "Vue.js" },
        { title: "React.js" },
        { title: "Node.js" },
        { title: "Next.js" },
        { title: "Flutter" },
        { title: "Bootstrap" },
      ],
      activeDropdown: null,
      isEditable: false,
      exercises: [
        "Exercise 1",
        "Exercise 2",
        "Exercise 3",
        "Exercise 4",
        "Exercise 5",
        "Exercise 6",
        "Exercise 7",
        "Exercise 8",
        "Exercise 9",
        "Exercise 10",
      ],
    };
  },
  methods: {
    toggleDropdown(index) {
      this.activeDropdown = this.activeDropdown === index ? null : index;
    },
    makeEditable() {
      this.isEditable = true;
      this.$nextTick(() => {
        const editableDiv = this.$refs.editableCode;
        if (editableDiv) {
          document.execCommand('insertText', false, editableDiv.innerHTML);
        }
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  margin-top: 74px;
  width: 100%;
  height: 100vh;
}

.sidebar {
  width: 20%;
  background-color: #f0f0f0;
  overflow-y: auto;
  border-right: 1px solid #ccc;
}

.dropdown {
  border-bottom: 1px solid #ccc;
}

.dropdown-header {
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.dropdown-content {
  padding: 10px;
}

.content {
  width: 80%;
  padding: 20px;
  overflow-y: auto;
}

.content-section {
  margin-bottom: 20px;
}

.code-container {
  border-radius: 10px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 10px;
}

.editable-code {
  white-space: pre-wrap;
  font-family: monospace;
  outline: none; /* Remove outline when editing */
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
}

button:hover {
  background-color: #0056b3;
}
</style>
