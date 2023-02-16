const live2d_path = "https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) =&gt; {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () =&gt; resolve(url);
			tag.onerror = () =&gt; reject(url);
			document.head.appendChild(tag);
		}
	});
}
if (screen.width &gt;= 768) {
	Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.js", "js")
	]).then(() =&gt; {
		initWidget({
			waifuPath: live2d_path + "waifu-tips.json",
			apiPath: "https://live2d.fghrsh.net/api/",
			cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/",
			tools: ["hitokoto", "asteroids", "switch-model", "switch-texture", "photo", "info", "quit"]
		});
	});
}