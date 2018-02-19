module.exports = {
	apps: [
		{
			name: "daocheng",
			script: "./app.js",
			watch: true,
			env: {
				"PORT": 80,
				"NODE_ENV": "dev",
			},
			env_prod: {
				"PORT": 8004,
				"NODE_ENV": "prod"
			}
		}
	]
}