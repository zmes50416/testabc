Ext.require(['Ext.data.*']);
Ext.onReady(function() {

    window.generateData = function(n){
        window.QQ = [];
        window.word=[];
        var year=1;
        var ajax=$.ajax({
            url:'../MarketFocus/trend_get.php',
            type: 'GET',
            async:false,
            datatype: 'html',
            data:'type=year',                
            success: function(str){
                set=str.split(":");
                year=parseInt(set[0]);
				month=parseInt(set[1]);
				if((month<3)&&(year>1))
					year=year-1;
            }
        });
        var ajax=$.ajax({
            url:'../MarketFocus/trend_get.php',
            type: 'GET',
            async:false,
            datatype: 'html',
            data:'type='+year,
            success: function(str){
				window.QQ = [];
                window.word=str.split(':');
            }
        });
        if(typeof n !='undefined'){
            window.QQ = [];
            window.word=[];
            var ajax=$.ajax({
                url:'../MarketFocus/trend_get.php',
                type: 'GET',
                async:false,
                datatype: 'html',
                data:'type='+n,                
                success: function(str){
                    window.word=str.split(':');
                }
            });
        }

        var i=0;
        while(window.word[i]!="@"){
            if(parseInt(window.word[i])==1){
                window.QQ.push(
                {
                    name: '一月',
                    data1: parseInt(window.word[i+1]),
                    data2: parseInt(window.word[i+2])
                }
                );
            }else if(parseInt(window.word[i])==2){
                window.QQ.push(
                {
                    name: '二月',
                    data1: parseInt(window.word[i+1]),
                    data2: parseInt(window.word[i+2])
                }
                );
            }else if(parseInt(window.word[i])==3){
                window.QQ.push(
                {
                    name: '三月',
                    data1: parseInt(window.word[i+1]),
                    data2: parseInt(window.word[i+2])
                }
                );
            }else if(parseInt(window.word[i])==4){
                window.QQ.push(
                {
                    name: '四月',
                    data1: parseInt(window.word[i+1]),
                    data2: parseInt(window.word[i+2])
                }
                );
            }else if(parseInt(window.word[i])==5){
                window.QQ.push(
                {
                    name: '五月',
                    data1: parseInt(window.word[i+1]),
                    data2: parseInt(window.word[i+2])
                }
                );
            }else if(parseInt(window.word[i])==6){
                window.QQ.push(
                {
                    name: '六月',
                    data1: parseInt(window.word[i+1]),
                    data2: parseInt(window.word[i+2])
                }
                );
            }else if(parseInt(window.word[i])==7){
                window.QQ.push(
                {
                    name: '七月',
                    data1: parseInt(window.word[i+1]),
                    data2: parseInt(window.word[i+2])
                }
                );
            }else if(parseInt(window.word[i])==8){
                window.QQ.push(
                {
                    name: '八月',
                    data1: parseInt(window.word[i+1]),
                    data2: parseInt(window.word[i+2])
                }
                );
            }else if(parseInt(window.word[i])==9){
                window.QQ.push(
                {
                    name: '九月',
                    data1: parseInt(window.word[i+1]),
                    data2: parseInt(window.word[i+2])
                }
                );
            }else if(parseInt(window.word[i])==10){
                window.QQ.push(
                {
                    name: '十月',
                    data1: parseInt(window.word[i+1]),
                    data2: parseInt(window.word[i+2])
                }
                );
            }else if(parseInt(window.word[i])==11){
                window.QQ.push(
                {
                    name: '十一月',
                    data1: parseInt(window.word[i+1]),
                    data2: parseInt(window.word[i+2])
                }
                );
            }else if(parseInt(window.word[i])==12){
                window.QQ.push(
                {
                    name: '十二月',
                    data1: parseInt(window.word[i+1]),
                    data2: parseInt(window.word[i+2])
                }
                );
            }
            i=i+3;
        }
        return window.QQ;
    }

    window.store1 = Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data1','data2'],
        data: generateData()
    });
});


