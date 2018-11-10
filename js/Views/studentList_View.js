


test = (function(){

    function ListView(matches) {
        console.log("inside List View Constructor");
        console.log(matches);
        var ul_node=document.getElementById('indexNameList');
        this.root=ul_node;
        this.content=matches;

        this.createChildNodeHandlebars=function(){
			var source = document.getElementById('studentListTemplate').innerHTML;
			var template = Handlebars.compile(source);
			var context = {'student' : this.content};
			var html_str = template(context);
			this.root.innerHTML = html_str;
		}
		
        this.createChildNodeHandlebars();
    }



	if (window.testApp == undefined) {
		window.testApp = {};
	}

	if (window.testApp.ui == undefined) {
		window.testApp.ui = {};
	}

	window.testApp.ui.ListView = ListView;

	return window.testApp;

})();
