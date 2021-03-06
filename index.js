//@todo we have to get a almost complete url list first
//@todo weibo&&weixin support

// get user's referred and parse it
// baidu::http://www.baidu.com/link?url=LtLpHikLBye0sF755pIZYGcc3k3CHHOHWryMKURXroXQvEMQO2NxncA4CTMu_PxSQXVLlXhFVmEXTKsOcegzSK&wd=%E4%BD%A0%E5%A6%B9&issp=1&ie=utf-8&tn=baiduhome_pg&inputT=1345
// google ip:http://74.125.235.191/url?sa=t&rct=j&q=%E6%92%AD%E7%A7%8D%E7%BD%91&source=web&cd=1&ved=0CCcQFjAA&url=%68%74%74%70%3a%2f%2f%77%77%77%2e%73%65%65%64%69%74%2e%63%6f%6d%2f&ei=ZBdNU6KnI8eSkwXZ4oGoDQ&usg=AFQjCNFylKHywKzhTKFH6GpEzLXxxt3ylQ&bvm=bv.64764171,d.dGI&cad=rjt

//获取url的特定参数

function getQueryStringRegExp(name, url) {
    var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
    if (reg.test(url)) return decodeURIComponent(RegExp.$2.replace(/\+/g, " "));
    return "";
}


var referrer = document.referrer;
if (!referrer) {
    try {
        if (window.opener) {
            // IE下如果跨域则抛出权限异常
            // Safari和Chrome下window.opener.location没有任何属性
            referrer = window.opener.location.href;
        }
    } catch (e) {
    }
}


var lists = [
    // http://www.baidu.com/s?wd=施巴和加州宝宝哪个好
    {
        domain: 'www.baidu.com',
        key: 'wd'
    },
    {
        domain: 'www.baidu.com',
        key: 'word'
    },
    {
        domain: 'www.baidu.com',
        key: 'bs'
    },
    {
        domain: 'm.baidu.com',
        key: 'word'
    },
    {
        domain: 'soso',
        key: 'query'
    },
    {
        domain: 'www.sogou.com',
        key: 'query'
    },
    {
        domain: 'm.sogou.com',
        key: 'keyword'
    },
    {
        domain: 'youdao',
        key: 'q'
    },
    {
        domain: 'google',
        key: 'q'
    },
    // http://www.so.com/s?q=验血结果看男女
    {
        domain: 'www.so.com',
        key: 'q'
    },
    // http://m.so.com/s?q=单岁双月生男孩
    {
        domain: 'm.so.com',
        key: 'q'
    },
    // http://image.so.com/v?q=怀孕三个月胎儿图
    {
        domain: 'image.so.com',
        key: 'q'
    },
    {
        domain: 'ly.so.com',
        key: 'q'
    },
    // other so.com
    {
        domain: 'so.com',
        key: 'q'
    },
    // http://so.360.cn/s?q=精子畸形率95.5
    {
        domain: '360.cn',
        key: 'q'
    },
    // http://m.sa.sm.cn/s?q=孕期31周心情很不好
    // http://m.sj.sm.cn/s?q=五个月宝宝一天拉两次屎有泡泡
    // http://m.yz.sm.cn/s?q=上怀
    // ...
    {
        domain: 'sm.cn',
        key: 'q'
    },
    // http://cn.bing.com/search?q=玛特纳 胎停
    {
        domain: 'bing.com',
        key: 'q'
    }
];

function getKey(url) {
    url = url || referrer;
    var key = '';
    var domain = '';
    for (var i = 0; i < lists.length; i++) {
        var Reg = new RegExp(lists[i]['domain']);
        if (Reg.test(url)) {
            key = getQueryStringRegExp(lists[i]['key'], url);
            if (key) {
                domain = lists[i].domain;
                break;
            }
        }
    }
    return {
        domain: domain,
        key: key,
        referrer: referrer
    }
}


module.exports.getKey = getKey;