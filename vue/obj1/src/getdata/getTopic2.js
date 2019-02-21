import axios from 'axios';
var $http = axios.create({
	// 基本的url
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
});


function getTopics(options){
	// 默认参数
	var newsOpitons = Object.assign({
		tab:'all',
		limit:10,
		page:1,
	},options);

	return $http({
		url:'/topics',
		// 参数
		params:newsOpitons,
	});
}

function getTopicData(){
	console.log('您是需要我去请求 主题的详细信息吗？')
}

export {getTopics,getTopicData}
