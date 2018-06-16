<?php
//先获取所有json数据
$text=file_get_contents('../json/index.json');
//把json转成php数组,记好decode和encode是破译和编译
$textArr=json_decode($text);
//随机返回8个组成新数组然后再变成json
//把随机8个key弄出来主城一个新数组
$keyArr=array_rand($textArr,8);
//把他们对应的值装进新数组
$newArr=array();
for($i=0;$i<count($keyArr);$i++){
    $key=$keyArr[$i];
    $oneobj =$textArr[$key];
    $newArr[$i]=$oneobj;
};
//差点忘了把newArr转回json
$answer=json_encode($newArr);
echo $answer;