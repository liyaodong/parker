module.exports = function(data, echo) {
    var user = data.FromUserName;
    var content = data.Content;
    var eatReg = /(?:.*[定订午晚全]+.*[饭餐天部].*)|[0123\*\-]+/ig;
    var alertReg = /(?:订阅|取消)提醒/ig;
    if(content === '') {
        echo('求表情包～～');
    } else if(['帮助', '求助', 'help'].indexOf(content.toLowerCase()) !== -1) {
        require('../../robots/other').getHelp(user, content, echo);
    } else if(alertReg.test(content)) {
        require('../../robots/alert')(user, content, echo);
    } else if(eatReg.test(content)) {
        require('../../robots/eat')(user, content, echo);
    } else {
        echo('我说“' + (Math.random() >= 0.5 ? '极客' : '公园') + '”你说“' + content + '”');
    }
};
