<?php
	// 定义模拟的数据库
	$data=[
		["pic"=>"images/".mt_rand(180,184).".jpg"],
		["pic"=>"images/".mt_rand(180,184).".jpg"],
		["pic"=>"images/".mt_rand(180,184).".jpg"],
		["pic"=>"images/".mt_rand(180,184).".jpg"],
        ["pic"=>"images/".mt_rand(180,184).".jpg"]
	];

	// 输出请求的数据
	echo json_encode($data);

?>