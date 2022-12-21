const { createApp } = Vue;

createApp({
	data () {
		return {
			new_task: "",
			todo_list: [
				{
					text: "fare la spesa",
					done: false
				},
				{
					text: "fare l'insalata",
					done: false
				},
				{
					text: "studiare vue js",
					done: false
				},
				{
					text: "riunione scout",
					done: false
				},
				{
					text: "fare merenda",
					done: false
				},
			]
		}
	},

	methods: {
		add_task() {
			let object = {
				text: this.new_task,
				done: false
			}
			this.todo_list.push(object);
		},

		check_task(index) {
			let task = this.todo_list[index];
			
			if (task.done == false) {
				task.done = true;
			}
			else {
				task.done = false
			}
		},

		remove_task (index) {
			this.todo_list.splice(index, 1)
		}

	}
}).mount('#app');