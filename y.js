function foo() {
        var y = Math.atan2(a/b); // MISMATCHED_COUNT_OF_ARGS alarm
}

function aaaa() {
    var pChangeMessageList = {};
    var param = typeof pChangeMessageList == "Array" ? pChangeMessageList.join('|') : pChangeMessageList;
    console.log(param);

    (function updateZkConfigs(configs) {
      var zks = this.getZkServerHosts();
      var portValue = configs['zoo.cfg'] && Em.get(configs['zoo.cfg'], 'clientPort');
      var zkPort = typeof portValue === 'udefined' ? '2181' : portValue;
      var zksWithPort = this.concatZkNames(zks, zkPort);
      this.setZKConfigs(configs, zksWithPort, zks);
    })({});
}

function a2() {
    if ($.browser.msie == true) {
        var target = url + "userName" + userName; // 1)
        target = url.replace(/\.|\?|\&|\/|\=|\:|\-|\s/gi,""); // 2)
        return target;
    }
}
