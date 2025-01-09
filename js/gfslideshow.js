function bleep() {
  var show = "http://www.tjg-ent.com/xml/slideShow.xml";
  var options = {
    displayTime: 4500,
    transistionTime: 800,
    linkTarget : google.feeds.LINK_TARGET_SELF,
    thumbnailSize : GFslideShow.THUMBNAILS_LARGE,
    fullControlPanel : true,
    fullControlPanelSmallIcons : true,
    pauseOnHover : false
  };
  new GFslideShow(show, "slideShow", options);
}
google.load("feeds", "1");
google.setOnLoadCallback(bleep);
