var expect = require('expect');
var searchFrom = require('index');
var getKey = searchFrom.getKey;
console.log(searchFrom);
describe('search-from', function() {

    it('百度来源', function() {
        expect(getKey('http://www.baidu.com/s?wd=怎样确定是不是意念灰')).to.be('怎样确定是不是意念灰');
        expect(getKey('http://www.baidu.com/s?word=通水当月怀孕')).to.be('通水当月怀孕');
        expect(getKey('http://www.baidu.com/s?bs=怀孕16周')).to.be('怀孕16周');
        expect(getKey('http://www.baidu.com/baidu?word=J打头的女英文名')).to.be('J打头的女英文名');
        expect(getKey('http://m.baidu.com/from=1000953b/s?word=三十五周早产')).to.be('三十五周早产');
    });

    it('so', function() {
        expect(getKey('http://www.so.com/s?q=同房AA时间')).to.be('同房AA时间');
        expect(getKey('http://ly.so.com/s?q=没有卵黄囊  没有胎心')).to.be('没有卵黄囊  没有胎心');

    });

    it('神马', function() {
        expect(getKey('http://m.sj.sm.cn/s?q=新生儿睡新装修的房子')).to.be('新生儿睡新装修的房子');

    });


    it('sogou', function() {
        expect(getKey('http://www.sogou.com/sogou?query=男人的JJ')).to.be('男人的JJ');

    });

    it('google',function(){

    });

});