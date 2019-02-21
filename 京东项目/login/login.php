<?php
    $value=$_POST['value'];
    // echo $value;

    // 声明以存在的用户名
    $arr=['123','xm','aa','abc','小明'];

    // 判断 传来的值是否已存在
    if(in_array($value,$arr)){
        // 已存在
        echo 'y';
    }else{
        //不存在
        echo "n";
    }

?>