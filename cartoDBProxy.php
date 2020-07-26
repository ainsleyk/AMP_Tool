<?php
    session_cache_limiter('nocache');
    $cache_limiter = session_cache_limiter();
    function goProxy($dataURL)
    {
        $baseURL = 'http://ainsleyk.cartodb.com/api/v2/sql?';
        //                  ^ CHANGE THE 'CARTODB-USER-NAME' to your cartoDB url!
        $api = '&api_key= de5da1b00a1fb3e03e27e3c559a0ede343033f39';
        //             ^ENTER YOUR API KEY HERE!
        $url = $baseURL.'q='.urlencode($dataURL).$api;
        $result = file_get_contents ($url);
        return $result;
    }
?>
