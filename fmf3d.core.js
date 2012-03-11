function Fmf3D(bodies) {
	var self = this;
	self.bodies = bodies;
	self.w = $("#wrapper");
	self.c = $("#inner");


	function init() {
		for (var i = self.bodies.solids.length - 1; i >= 0; i--) {
			var solid = self.bodies.solids[i];

			var $frontFace = $(document.createElement("div"));
			
			$frontFace.attr("style", formatCss({
				tox:0, 	toy:0, 	toz:0,
				t3dx:0, t3dy:0, t3dz:0,
				tx:200,	ty:200,	tz:0,
				rx:0, 	ry:0, 	rz:0
			}));

			$frontFace.width(solid.size.width);
			$frontFace.height(solid.size.height);



			$frontFace.addClass("face");
			$frontFace.appendTo(self.c);

		}

		self.c.attr("style", formatCss( 
			{ 
				tox:0, 	toy:0, 	toz:0,
				t3dx:0, t3dy:0, t3dz:0,
				tx:0, 	ty:0, 	tz:0,
				rx:0, 	ry:0, 	rz:0
			}
		));

		$("body").keydown(function(event) {
			console.log(event.keyCode);
			if (event.keyCode == 38) {
				var currentCssString = self.c.attr("style");
				var objectCss = parseCss(currentCssString);
				objectCss.tz = objectCss.tz +1;
				self.c.attr("style", formatCss(objectCss));
			}
			if (event.keyCode == 40) {
				var currentCssString = self.c.attr("style");
				var objectCss = parseCss(currentCssString);
				objectCss.t3dx = objectCss.t3dx -1;
				objectCss.t3dy = objectCss.t3dy -1;
				objectCss.t3dz = objectCss.t3dz -1;
				self.c.attr("style", formatCss(objectCss));
			}
			if (event.keyCode == 37) {
				var currentCssString = self.c.attr("style");
				var objectCss = parseCss(currentCssString);
				objectCss.ry = objectCss.ry +1;
				self.c.attr("style", formatCss(objectCss));
			}
			if (event.keyCode == 39) {
				var currentCssString = self.c.attr("style");
				var objectCss = parseCss(currentCssString);
				objectCss.ry = objectCss.ry -1;
				self.c.attr("style", formatCss(objectCss));
			}
		});
	}

	init();
}

function formatCss(cssObject) {
	return "-webkit-transform-origin-x: "+cssObject.tox+"px; "+
				"-webkit-transform-origin-y: "+cssObject.toy+"px; "+
				"-webkit-transform-origin-z: "+cssObject.toz+"px; "+
				"-webkit-transform: "+
					"translate3d("+cssObject.t3dx+"px, "+cssObject.t3dy+"px, "+cssObject.t3dz+"px) "+
					"translateX("+cssObject.tx+"px) "+
					"translateY("+cssObject.ty+"px) "+
					"translateZ("+cssObject.tz+"px) "+
					"rotateX("+cssObject.rx+"deg) "+
					"rotateY("+cssObject.ry+"deg) "+
					"rotateZ("+cssObject.rz+"deg); "
}

function parseCss(cssString) {
	tabExtractedNumbers = cssString.match(/[-]?[0-9]+/g);
	console.log(tabExtractedNumbers);
	return { 
			tox:parseInt(tabExtractedNumbers[0],10), 	toy:parseInt(tabExtractedNumbers[1],10), 	toz:parseInt(tabExtractedNumbers[2],10),
			t3dx:parseInt(tabExtractedNumbers[3],10), 	t3dy:parseInt(tabExtractedNumbers[5],10),  	t3dz:parseInt(tabExtractedNumbers[6],10),
			tx:parseInt(tabExtractedNumbers[7],10), 	ty:parseInt(tabExtractedNumbers[8],10), 	tz:parseInt(tabExtractedNumbers[9],10),
			rx:parseInt(tabExtractedNumbers[10],10), 	ry:parseInt(tabExtractedNumbers[11],10), 	rz:parseInt(tabExtractedNumbers[11],10)
		}
}


