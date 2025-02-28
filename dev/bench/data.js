window.BENCHMARK_DATA = {
  "lastUpdate": 1740734881695,
  "repoUrl": "https://github.com/HeZephyr/GoMicroKit",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "2825841950@qq.com",
            "name": "HeZephyr",
            "username": "HeZephyr"
          },
          "committer": {
            "email": "2825841950@qq.com",
            "name": "HeZephyr",
            "username": "HeZephyr"
          },
          "distinct": true,
          "id": "c6f28247dd0817db26ff9a9f6eec5e48246e6c0c",
          "message": "ci: simplify benchmark workflow after manual gh-pages creation",
          "timestamp": "2025-02-27T18:10:18+08:00",
          "tree_id": "4342f7bf1de59ab985ad5371b7dfd109a2ccc464",
          "url": "https://github.com/HeZephyr/GoMicroKit/commit/c6f28247dd0817db26ff9a9f6eec5e48246e6c0c"
        },
        "date": 1740651074596,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogInfo",
            "value": 632.5,
            "unit": "ns/op\t     328 B/op\t       7 allocs/op",
            "extra": "1853666 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - ns/op",
            "value": 632.5,
            "unit": "ns/op",
            "extra": "1853666 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - B/op",
            "value": 328,
            "unit": "B/op",
            "extra": "1853666 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1853666 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField",
            "value": 1076,
            "unit": "ns/op\t     718 B/op\t      13 allocs/op",
            "extra": "942939 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - ns/op",
            "value": 1076,
            "unit": "ns/op",
            "extra": "942939 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - B/op",
            "value": 718,
            "unit": "B/op",
            "extra": "942939 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "942939 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields",
            "value": 2099,
            "unit": "ns/op\t    1068 B/op\t      22 allocs/op",
            "extra": "554762 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - ns/op",
            "value": 2099,
            "unit": "ns/op",
            "extra": "554762 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - B/op",
            "value": 1068,
            "unit": "B/op",
            "extra": "554762 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "554762 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting",
            "value": 1032,
            "unit": "ns/op\t     433 B/op\t       7 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - ns/op",
            "value": 1032,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - B/op",
            "value": 433,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister",
            "value": 138.4,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "8648054 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - ns/op",
            "value": 138.4,
            "unit": "ns/op",
            "extra": "8648054 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "8648054 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8648054 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService",
            "value": 51.38,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "22733967 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - ns/op",
            "value": 51.38,
            "unit": "ns/op",
            "extra": "22733967 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "22733967 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "22733967 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister",
            "value": 123547,
            "unit": "ns/op\t  155660 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - ns/op",
            "value": 123547,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - B/op",
            "value": 155660,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService",
            "value": 8.343,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "137670933 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - ns/op",
            "value": 8.343,
            "unit": "ns/op",
            "extra": "137670933 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "137670933 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "137670933 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint",
            "value": 94.7,
            "unit": "ns/op\t      97 B/op\t       0 allocs/op",
            "extra": "13203654 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - ns/op",
            "value": 94.7,
            "unit": "ns/op",
            "extra": "13203654 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "13203654 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13203654 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint",
            "value": 88.48,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "13821976 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - ns/op",
            "value": 88.48,
            "unit": "ns/op",
            "extra": "13821976 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "13821976 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "13821976 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware",
            "value": 91.66,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "12479412 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - ns/op",
            "value": 91.66,
            "unit": "ns/op",
            "extra": "12479412 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "12479412 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "12479412 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister",
            "value": 2570,
            "unit": "ns/op\t    2648 B/op\t      33 allocs/op",
            "extra": "445586 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - ns/op",
            "value": 2570,
            "unit": "ns/op",
            "extra": "445586 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - B/op",
            "value": 2648,
            "unit": "B/op",
            "extra": "445586 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "445586 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode",
            "value": 245.9,
            "unit": "ns/op\t     128 B/op\t       3 allocs/op",
            "extra": "4870428 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - ns/op",
            "value": 245.9,
            "unit": "ns/op",
            "extra": "4870428 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "4870428 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4870428 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode",
            "value": 800.7,
            "unit": "ns/op\t     992 B/op\t       9 allocs/op",
            "extra": "1433858 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - ns/op",
            "value": 800.7,
            "unit": "ns/op",
            "extra": "1433858 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - B/op",
            "value": 992,
            "unit": "B/op",
            "extra": "1433858 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1433858 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling",
            "value": 111008,
            "unit": "ns/op\t    8819 B/op\t      99 allocs/op",
            "extra": "9739 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - ns/op",
            "value": 111008,
            "unit": "ns/op",
            "extra": "9739 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - B/op",
            "value": 8819,
            "unit": "B/op",
            "extra": "9739 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "9739 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow",
            "value": 115242,
            "unit": "ns/op\t    9292 B/op\t     107 allocs/op",
            "extra": "9355 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - ns/op",
            "value": 115242,
            "unit": "ns/op",
            "extra": "9355 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - B/op",
            "value": 9292,
            "unit": "B/op",
            "extra": "9355 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "9355 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery",
            "value": 59.67,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "19844949 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - ns/op",
            "value": 59.67,
            "unit": "ns/op",
            "extra": "19844949 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "19844949 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19844949 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2825841950@qq.com",
            "name": "HeZephyr",
            "username": "HeZephyr"
          },
          "committer": {
            "email": "2825841950@qq.com",
            "name": "HeZephyr",
            "username": "HeZephyr"
          },
          "distinct": true,
          "id": "407326e6c513631b65f4861188eea52eb2b62943",
          "message": "feat(resilience): implement circuit breaker pattern",
          "timestamp": "2025-02-28T10:05:21+08:00",
          "tree_id": "7d51df713ff00c8c45bf382e4b091bf4ea745896",
          "url": "https://github.com/HeZephyr/GoMicroKit/commit/407326e6c513631b65f4861188eea52eb2b62943"
        },
        "date": 1740708394698,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogInfo",
            "value": 634.4,
            "unit": "ns/op\t     324 B/op\t       7 allocs/op",
            "extra": "1912165 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - ns/op",
            "value": 634.4,
            "unit": "ns/op",
            "extra": "1912165 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - B/op",
            "value": 324,
            "unit": "B/op",
            "extra": "1912165 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1912165 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField",
            "value": 1052,
            "unit": "ns/op\t     716 B/op\t      13 allocs/op",
            "extra": "952321 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - ns/op",
            "value": 1052,
            "unit": "ns/op",
            "extra": "952321 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - B/op",
            "value": 716,
            "unit": "B/op",
            "extra": "952321 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "952321 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields",
            "value": 2037,
            "unit": "ns/op\t    1064 B/op\t      22 allocs/op",
            "extra": "564350 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - ns/op",
            "value": 2037,
            "unit": "ns/op",
            "extra": "564350 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - B/op",
            "value": 1064,
            "unit": "B/op",
            "extra": "564350 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "564350 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting",
            "value": 1024,
            "unit": "ns/op\t     433 B/op\t       7 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - ns/op",
            "value": 1024,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - B/op",
            "value": 433,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister",
            "value": 140.1,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "8850144 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - ns/op",
            "value": 140.1,
            "unit": "ns/op",
            "extra": "8850144 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "8850144 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "8850144 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService",
            "value": 50.19,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "23139477 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - ns/op",
            "value": 50.19,
            "unit": "ns/op",
            "extra": "23139477 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "23139477 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "23139477 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister",
            "value": 117310,
            "unit": "ns/op\t  155660 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - ns/op",
            "value": 117310,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - B/op",
            "value": 155660,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkBreakerAllow",
            "value": 62.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19016206 times\n4 procs"
          },
          {
            "name": "BenchmarkBreakerAllow - ns/op",
            "value": 62.91,
            "unit": "ns/op",
            "extra": "19016206 times\n4 procs"
          },
          {
            "name": "BenchmarkBreakerAllow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19016206 times\n4 procs"
          },
          {
            "name": "BenchmarkBreakerAllow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19016206 times\n4 procs"
          },
          {
            "name": "BenchmarkBreakerSuccess",
            "value": 10.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkBreakerSuccess - ns/op",
            "value": 10.3,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkBreakerSuccess - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkBreakerSuccess - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkBreakerFailure",
            "value": 10.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkBreakerFailure - ns/op",
            "value": 10.64,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkBreakerFailure - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkBreakerFailure - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkBreakerExecute",
            "value": 69.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17331142 times\n4 procs"
          },
          {
            "name": "BenchmarkBreakerExecute - ns/op",
            "value": 69.33,
            "unit": "ns/op",
            "extra": "17331142 times\n4 procs"
          },
          {
            "name": "BenchmarkBreakerExecute - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17331142 times\n4 procs"
          },
          {
            "name": "BenchmarkBreakerExecute - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17331142 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService",
            "value": 8.329,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "140903665 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - ns/op",
            "value": 8.329,
            "unit": "ns/op",
            "extra": "140903665 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "140903665 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "140903665 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint",
            "value": 84.76,
            "unit": "ns/op\t      93 B/op\t       0 allocs/op",
            "extra": "13789708 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - ns/op",
            "value": 84.76,
            "unit": "ns/op",
            "extra": "13789708 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - B/op",
            "value": 93,
            "unit": "B/op",
            "extra": "13789708 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13789708 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint",
            "value": 80.59,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "13381930 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - ns/op",
            "value": 80.59,
            "unit": "ns/op",
            "extra": "13381930 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "13381930 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "13381930 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware",
            "value": 89.53,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "13425656 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - ns/op",
            "value": 89.53,
            "unit": "ns/op",
            "extra": "13425656 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "13425656 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13425656 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister",
            "value": 2553,
            "unit": "ns/op\t    2648 B/op\t      33 allocs/op",
            "extra": "454784 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - ns/op",
            "value": 2553,
            "unit": "ns/op",
            "extra": "454784 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - B/op",
            "value": 2648,
            "unit": "B/op",
            "extra": "454784 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "454784 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode",
            "value": 243.1,
            "unit": "ns/op\t     128 B/op\t       3 allocs/op",
            "extra": "4896760 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - ns/op",
            "value": 243.1,
            "unit": "ns/op",
            "extra": "4896760 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "4896760 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4896760 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode",
            "value": 800.9,
            "unit": "ns/op\t     992 B/op\t       9 allocs/op",
            "extra": "1502850 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - ns/op",
            "value": 800.9,
            "unit": "ns/op",
            "extra": "1502850 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - B/op",
            "value": 992,
            "unit": "B/op",
            "extra": "1502850 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1502850 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling",
            "value": 107003,
            "unit": "ns/op\t    8808 B/op\t      99 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - ns/op",
            "value": 107003,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - B/op",
            "value": 8808,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow",
            "value": 109823,
            "unit": "ns/op\t    9284 B/op\t     107 allocs/op",
            "extra": "9206 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - ns/op",
            "value": 109823,
            "unit": "ns/op",
            "extra": "9206 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - B/op",
            "value": 9284,
            "unit": "B/op",
            "extra": "9206 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "9206 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery",
            "value": 59.76,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "19588242 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - ns/op",
            "value": 59.76,
            "unit": "ns/op",
            "extra": "19588242 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "19588242 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19588242 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2825841950@qq.com",
            "name": "HeZephyr",
            "username": "HeZephyr"
          },
          "committer": {
            "email": "2825841950@qq.com",
            "name": "HeZephyr",
            "username": "HeZephyr"
          },
          "distinct": true,
          "id": "2068363ccd65befc6d0e1e46f48c37d9db285517",
          "message": "refactor(resilience): refactor circuit breaker pattern",
          "timestamp": "2025-02-28T14:31:20+08:00",
          "tree_id": "89106df506ffa6492db1aa9775ff928aeb4d361b",
          "url": "https://github.com/HeZephyr/GoMicroKit/commit/2068363ccd65befc6d0e1e46f48c37d9db285517"
        },
        "date": 1740724356385,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogInfo",
            "value": 624,
            "unit": "ns/op\t     323 B/op\t       7 allocs/op",
            "extra": "1919580 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - ns/op",
            "value": 624,
            "unit": "ns/op",
            "extra": "1919580 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - B/op",
            "value": 323,
            "unit": "B/op",
            "extra": "1919580 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1919580 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField",
            "value": 1036,
            "unit": "ns/op\t     711 B/op\t      13 allocs/op",
            "extra": "991359 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - ns/op",
            "value": 1036,
            "unit": "ns/op",
            "extra": "991359 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - B/op",
            "value": 711,
            "unit": "B/op",
            "extra": "991359 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "991359 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields",
            "value": 2025,
            "unit": "ns/op\t    1055 B/op\t      22 allocs/op",
            "extra": "586694 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - ns/op",
            "value": 2025,
            "unit": "ns/op",
            "extra": "586694 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - B/op",
            "value": 1055,
            "unit": "B/op",
            "extra": "586694 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "586694 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting",
            "value": 1006,
            "unit": "ns/op\t     433 B/op\t       7 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - ns/op",
            "value": 1006,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - B/op",
            "value": 433,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister",
            "value": 137.3,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "8867508 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - ns/op",
            "value": 137.3,
            "unit": "ns/op",
            "extra": "8867508 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "8867508 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "8867508 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService",
            "value": 51.95,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "23450875 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - ns/op",
            "value": 51.95,
            "unit": "ns/op",
            "extra": "23450875 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "23450875 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "23450875 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister",
            "value": 117442,
            "unit": "ns/op\t  155660 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - ns/op",
            "value": 117442,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - B/op",
            "value": 155660,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow",
            "value": 10.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "99787286 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow - ns/op",
            "value": 10.59,
            "unit": "ns/op",
            "extra": "99787286 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "99787286 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "99787286 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success",
            "value": 10.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - ns/op",
            "value": 10.3,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure",
            "value": 11.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "107675769 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - ns/op",
            "value": 11.32,
            "unit": "ns/op",
            "extra": "107675769 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "107675769 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "107675769 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success",
            "value": 23.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "49949354 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - ns/op",
            "value": 23.06,
            "unit": "ns/op",
            "extra": "49949354 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49949354 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49949354 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure",
            "value": 24.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48877612 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - ns/op",
            "value": 24.63,
            "unit": "ns/op",
            "extra": "48877612 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48877612 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48877612 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed",
            "value": 23.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "49938594 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - ns/op",
            "value": 23.95,
            "unit": "ns/op",
            "extra": "49938594 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49938594 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49938594 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle",
            "value": 652.1,
            "unit": "ns/op\t     208 B/op\t       6 allocs/op",
            "extra": "1840066 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - ns/op",
            "value": 652.1,
            "unit": "ns/op",
            "extra": "1840066 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - B/op",
            "value": 208,
            "unit": "B/op",
            "extra": "1840066 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1840066 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel",
            "value": 144.3,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "8268201 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - ns/op",
            "value": 144.3,
            "unit": "ns/op",
            "extra": "8268201 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "8268201 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8268201 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad",
            "value": 176.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6876936 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - ns/op",
            "value": 176.2,
            "unit": "ns/op",
            "extra": "6876936 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6876936 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6876936 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead",
            "value": 396.6,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3039084 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - ns/op",
            "value": 396.6,
            "unit": "ns/op",
            "extra": "3039084 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "3039084 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3039084 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService",
            "value": 8.587,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "140250753 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - ns/op",
            "value": 8.587,
            "unit": "ns/op",
            "extra": "140250753 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "140250753 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "140250753 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint",
            "value": 85.69,
            "unit": "ns/op\t      86 B/op\t       0 allocs/op",
            "extra": "11905339 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - ns/op",
            "value": 85.69,
            "unit": "ns/op",
            "extra": "11905339 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - B/op",
            "value": 86,
            "unit": "B/op",
            "extra": "11905339 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11905339 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint",
            "value": 86.02,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "13609816 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - ns/op",
            "value": 86.02,
            "unit": "ns/op",
            "extra": "13609816 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "13609816 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "13609816 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware",
            "value": 91.23,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "12913716 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - ns/op",
            "value": 91.23,
            "unit": "ns/op",
            "extra": "12913716 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "12913716 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "12913716 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister",
            "value": 2542,
            "unit": "ns/op\t    2648 B/op\t      33 allocs/op",
            "extra": "464720 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - ns/op",
            "value": 2542,
            "unit": "ns/op",
            "extra": "464720 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - B/op",
            "value": 2648,
            "unit": "B/op",
            "extra": "464720 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "464720 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode",
            "value": 242.4,
            "unit": "ns/op\t     128 B/op\t       3 allocs/op",
            "extra": "4908513 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - ns/op",
            "value": 242.4,
            "unit": "ns/op",
            "extra": "4908513 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "4908513 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4908513 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode",
            "value": 802.7,
            "unit": "ns/op\t     992 B/op\t       9 allocs/op",
            "extra": "1491460 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - ns/op",
            "value": 802.7,
            "unit": "ns/op",
            "extra": "1491460 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - B/op",
            "value": 992,
            "unit": "B/op",
            "extra": "1491460 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1491460 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling",
            "value": 108182,
            "unit": "ns/op\t    8820 B/op\t      99 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - ns/op",
            "value": 108182,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - B/op",
            "value": 8820,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow",
            "value": 113156,
            "unit": "ns/op\t    9302 B/op\t     107 allocs/op",
            "extra": "9654 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - ns/op",
            "value": 113156,
            "unit": "ns/op",
            "extra": "9654 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - B/op",
            "value": 9302,
            "unit": "B/op",
            "extra": "9654 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "9654 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery",
            "value": 60.14,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "19706287 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - ns/op",
            "value": 60.14,
            "unit": "ns/op",
            "extra": "19706287 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "19706287 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19706287 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2825841950@qq.com",
            "name": "HeZephyr",
            "username": "HeZephyr"
          },
          "committer": {
            "email": "2825841950@qq.com",
            "name": "HeZephyr",
            "username": "HeZephyr"
          },
          "distinct": true,
          "id": "f69433b14d0965ba952db73cd700668bc2c20f61",
          "message": "feat(resilience): implement comprehensive rate limiting system",
          "timestamp": "2025-02-28T14:59:52+08:00",
          "tree_id": "a37e112832ad5c758e60c75fef338de88ccc8a42",
          "url": "https://github.com/HeZephyr/GoMicroKit/commit/f69433b14d0965ba952db73cd700668bc2c20f61"
        },
        "date": 1740726131656,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogInfo",
            "value": 637.8,
            "unit": "ns/op\t     324 B/op\t       7 allocs/op",
            "extra": "1913752 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - ns/op",
            "value": 637.8,
            "unit": "ns/op",
            "extra": "1913752 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - B/op",
            "value": 324,
            "unit": "B/op",
            "extra": "1913752 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1913752 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField",
            "value": 1054,
            "unit": "ns/op\t     710 B/op\t      13 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - ns/op",
            "value": 1054,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - B/op",
            "value": 710,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields",
            "value": 2076,
            "unit": "ns/op\t    1071 B/op\t      22 allocs/op",
            "extra": "549174 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - ns/op",
            "value": 2076,
            "unit": "ns/op",
            "extra": "549174 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - B/op",
            "value": 1071,
            "unit": "B/op",
            "extra": "549174 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "549174 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting",
            "value": 1025,
            "unit": "ns/op\t     433 B/op\t       7 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - ns/op",
            "value": 1025,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - B/op",
            "value": 433,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister",
            "value": 142.6,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "8389509 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - ns/op",
            "value": 142.6,
            "unit": "ns/op",
            "extra": "8389509 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "8389509 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8389509 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService",
            "value": 50.08,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "23199769 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - ns/op",
            "value": 50.08,
            "unit": "ns/op",
            "extra": "23199769 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "23199769 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "23199769 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister",
            "value": 121753,
            "unit": "ns/op\t  155660 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - ns/op",
            "value": 121753,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - B/op",
            "value": 155660,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow",
            "value": 10.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow - ns/op",
            "value": 10.6,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success",
            "value": 10.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - ns/op",
            "value": 10.31,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure",
            "value": 11.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - ns/op",
            "value": 11.47,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success",
            "value": 23.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51406897 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - ns/op",
            "value": 23.12,
            "unit": "ns/op",
            "extra": "51406897 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51406897 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51406897 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure",
            "value": 24.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47977788 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - ns/op",
            "value": 24.96,
            "unit": "ns/op",
            "extra": "47977788 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47977788 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47977788 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed",
            "value": 23.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "49890939 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - ns/op",
            "value": 23.87,
            "unit": "ns/op",
            "extra": "49890939 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49890939 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49890939 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle",
            "value": 653,
            "unit": "ns/op\t     208 B/op\t       6 allocs/op",
            "extra": "1834568 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - ns/op",
            "value": 653,
            "unit": "ns/op",
            "extra": "1834568 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - B/op",
            "value": 208,
            "unit": "B/op",
            "extra": "1834568 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1834568 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel",
            "value": 142.5,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "8349061 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - ns/op",
            "value": 142.5,
            "unit": "ns/op",
            "extra": "8349061 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "8349061 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8349061 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7279172 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - ns/op",
            "value": 171,
            "unit": "ns/op",
            "extra": "7279172 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7279172 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7279172 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead",
            "value": 394.5,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3032358 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - ns/op",
            "value": 394.5,
            "unit": "ns/op",
            "extra": "3032358 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "3032358 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3032358 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket",
            "value": 79.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14998162 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - ns/op",
            "value": 79.79,
            "unit": "ns/op",
            "extra": "14998162 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14998162 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14998162 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket",
            "value": 80.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14852424 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - ns/op",
            "value": 80.98,
            "unit": "ns/op",
            "extra": "14852424 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14852424 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14852424 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow",
            "value": 289.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4170946 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - ns/op",
            "value": 289.9,
            "unit": "ns/op",
            "extra": "4170946 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4170946 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4170946 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket",
            "value": 98.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12120416 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - ns/op",
            "value": 98.18,
            "unit": "ns/op",
            "extra": "12120416 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12120416 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12120416 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket",
            "value": 99.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12122007 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - ns/op",
            "value": 99.11,
            "unit": "ns/op",
            "extra": "12122007 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12122007 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12122007 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow",
            "value": 44353,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45974 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - ns/op",
            "value": 44353,
            "unit": "ns/op",
            "extra": "45974 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45974 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45974 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d",
            "value": 79720,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15043 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - ns/op",
            "value": 79720,
            "unit": "ns/op",
            "extra": "15043 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15043 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15043 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d",
            "value": 80346,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14934 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - ns/op",
            "value": 80346,
            "unit": "ns/op",
            "extra": "14934 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14934 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14934 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d",
            "value": 487032,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2475 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - ns/op",
            "value": 487032,
            "unit": "ns/op",
            "extra": "2475 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2475 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2475 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket",
            "value": 7959,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149917 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - ns/op",
            "value": 7959,
            "unit": "ns/op",
            "extra": "149917 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "149917 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "149917 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket",
            "value": 8023,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149486 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - ns/op",
            "value": 8023,
            "unit": "ns/op",
            "extra": "149486 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "149486 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "149486 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow",
            "value": 28635,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41907 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - ns/op",
            "value": 28635,
            "unit": "ns/op",
            "extra": "41907 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41907 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41907 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow",
            "value": 80.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14825613 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - ns/op",
            "value": 80.89,
            "unit": "ns/op",
            "extra": "14825613 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14825613 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14825613 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN",
            "value": 80.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14876269 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - ns/op",
            "value": 80.65,
            "unit": "ns/op",
            "extra": "14876269 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14876269 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14876269 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak",
            "value": 73.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16261118 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - ns/op",
            "value": 73.97,
            "unit": "ns/op",
            "extra": "16261118 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16261118 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16261118 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware",
            "value": 82.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14607176 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - ns/op",
            "value": 82.25,
            "unit": "ns/op",
            "extra": "14607176 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14607176 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14607176 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel",
            "value": 100.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11880445 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - ns/op",
            "value": 100.9,
            "unit": "ns/op",
            "extra": "11880445 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11880445 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11880445 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_",
            "value": 81.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14773854 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - ns/op",
            "value": 81.34,
            "unit": "ns/op",
            "extra": "14773854 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14773854 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14773854 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d",
            "value": 80.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14822640 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - ns/op",
            "value": 80.94,
            "unit": "ns/op",
            "extra": "14822640 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14822640 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14822640 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_",
            "value": 83.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14775792 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - ns/op",
            "value": 83.26,
            "unit": "ns/op",
            "extra": "14775792 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14775792 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14775792 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d",
            "value": 81.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14766218 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - ns/op",
            "value": 81.17,
            "unit": "ns/op",
            "extra": "14766218 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14766218 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14766218 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow",
            "value": 289.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4174198 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - ns/op",
            "value": 289.3,
            "unit": "ns/op",
            "extra": "4174198 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4174198 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4174198 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN",
            "value": 283.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4236848 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - ns/op",
            "value": 283.3,
            "unit": "ns/op",
            "extra": "4236848 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4236848 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4236848 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup",
            "value": 1395,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "864542 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - ns/op",
            "value": 1395,
            "unit": "ns/op",
            "extra": "864542 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "864542 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "864542 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware",
            "value": 292.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4090074 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - ns/op",
            "value": 292.2,
            "unit": "ns/op",
            "extra": "4090074 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4090074 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4090074 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel",
            "value": 61851,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47164 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - ns/op",
            "value": 61851,
            "unit": "ns/op",
            "extra": "47164 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47164 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47164 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_",
            "value": 68.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17498862 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - ns/op",
            "value": 68.72,
            "unit": "ns/op",
            "extra": "17498862 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17498862 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17498862 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d",
            "value": 86.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13916916 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - ns/op",
            "value": 86.2,
            "unit": "ns/op",
            "extra": "13916916 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13916916 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13916916 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow",
            "value": 80.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14892436 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - ns/op",
            "value": 80.63,
            "unit": "ns/op",
            "extra": "14892436 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14892436 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14892436 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN",
            "value": 80.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14942678 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - ns/op",
            "value": 80.28,
            "unit": "ns/op",
            "extra": "14942678 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14942678 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14942678 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill",
            "value": 71.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16813390 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - ns/op",
            "value": 71.35,
            "unit": "ns/op",
            "extra": "16813390 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16813390 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16813390 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware",
            "value": 82.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14663618 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - ns/op",
            "value": 82.06,
            "unit": "ns/op",
            "extra": "14663618 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14663618 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14663618 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel",
            "value": 98.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12075669 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - ns/op",
            "value": 98.74,
            "unit": "ns/op",
            "extra": "12075669 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12075669 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12075669 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain",
            "value": 82.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14508382 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - ns/op",
            "value": 82.46,
            "unit": "ns/op",
            "extra": "14508382 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14508382 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14508382 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService",
            "value": 8.327,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "140903019 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - ns/op",
            "value": 8.327,
            "unit": "ns/op",
            "extra": "140903019 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "140903019 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "140903019 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint",
            "value": 89.69,
            "unit": "ns/op\t      99 B/op\t       0 allocs/op",
            "extra": "12978657 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - ns/op",
            "value": 89.69,
            "unit": "ns/op",
            "extra": "12978657 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - B/op",
            "value": 99,
            "unit": "B/op",
            "extra": "12978657 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12978657 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint",
            "value": 81.46,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "14884136 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - ns/op",
            "value": 81.46,
            "unit": "ns/op",
            "extra": "14884136 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "14884136 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "14884136 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware",
            "value": 88.64,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "13229692 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - ns/op",
            "value": 88.64,
            "unit": "ns/op",
            "extra": "13229692 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "13229692 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13229692 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister",
            "value": 2554,
            "unit": "ns/op\t    2648 B/op\t      33 allocs/op",
            "extra": "443739 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - ns/op",
            "value": 2554,
            "unit": "ns/op",
            "extra": "443739 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - B/op",
            "value": 2648,
            "unit": "B/op",
            "extra": "443739 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "443739 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode",
            "value": 249.9,
            "unit": "ns/op\t     128 B/op\t       3 allocs/op",
            "extra": "4137145 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - ns/op",
            "value": 249.9,
            "unit": "ns/op",
            "extra": "4137145 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "4137145 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4137145 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode",
            "value": 804.7,
            "unit": "ns/op\t     992 B/op\t       9 allocs/op",
            "extra": "1493053 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - ns/op",
            "value": 804.7,
            "unit": "ns/op",
            "extra": "1493053 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - B/op",
            "value": 992,
            "unit": "B/op",
            "extra": "1493053 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1493053 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling",
            "value": 111875,
            "unit": "ns/op\t    8810 B/op\t      99 allocs/op",
            "extra": "9915 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - ns/op",
            "value": 111875,
            "unit": "ns/op",
            "extra": "9915 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - B/op",
            "value": 8810,
            "unit": "B/op",
            "extra": "9915 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "9915 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow",
            "value": 112826,
            "unit": "ns/op\t    9268 B/op\t     107 allocs/op",
            "extra": "9553 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - ns/op",
            "value": 112826,
            "unit": "ns/op",
            "extra": "9553 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - B/op",
            "value": 9268,
            "unit": "B/op",
            "extra": "9553 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "9553 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery",
            "value": 59.65,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "19539846 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - ns/op",
            "value": 59.65,
            "unit": "ns/op",
            "extra": "19539846 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "19539846 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19539846 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2825841950@qq.com",
            "name": "HeZephyr",
            "username": "HeZephyr"
          },
          "committer": {
            "email": "2825841950@qq.com",
            "name": "HeZephyr",
            "username": "HeZephyr"
          },
          "distinct": true,
          "id": "0615bf8ddb16755d3f4f58be8055bb8e964fb327",
          "message": "chore(ratelimit): update the name of ratelimit middleware",
          "timestamp": "2025-02-28T15:22:50+08:00",
          "tree_id": "1f1919b2fd6174bfffabedc29167edd39feefa97",
          "url": "https://github.com/HeZephyr/GoMicroKit/commit/0615bf8ddb16755d3f4f58be8055bb8e964fb327"
        },
        "date": 1740727545645,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogInfo",
            "value": 631.3,
            "unit": "ns/op\t     345 B/op\t       7 allocs/op",
            "extra": "1658115 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - ns/op",
            "value": 631.3,
            "unit": "ns/op",
            "extra": "1658115 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - B/op",
            "value": 345,
            "unit": "B/op",
            "extra": "1658115 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1658115 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField",
            "value": 1077,
            "unit": "ns/op\t     710 B/op\t      13 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - ns/op",
            "value": 1077,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - B/op",
            "value": 710,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields",
            "value": 2087,
            "unit": "ns/op\t    1075 B/op\t      22 allocs/op",
            "extra": "540015 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - ns/op",
            "value": 2087,
            "unit": "ns/op",
            "extra": "540015 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - B/op",
            "value": 1075,
            "unit": "B/op",
            "extra": "540015 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "540015 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting",
            "value": 1016,
            "unit": "ns/op\t     433 B/op\t       7 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - ns/op",
            "value": 1016,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - B/op",
            "value": 433,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister",
            "value": 141,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "8704513 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - ns/op",
            "value": 141,
            "unit": "ns/op",
            "extra": "8704513 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "8704513 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8704513 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService",
            "value": 51.48,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "22718820 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - ns/op",
            "value": 51.48,
            "unit": "ns/op",
            "extra": "22718820 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "22718820 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "22718820 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister",
            "value": 116687,
            "unit": "ns/op\t  155660 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - ns/op",
            "value": 116687,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - B/op",
            "value": 155660,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow",
            "value": 10.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow - ns/op",
            "value": 10.6,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success",
            "value": 10.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - ns/op",
            "value": 10.31,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure",
            "value": 11.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - ns/op",
            "value": 11.47,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success",
            "value": 23.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51965515 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - ns/op",
            "value": 23.07,
            "unit": "ns/op",
            "extra": "51965515 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51965515 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51965515 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure",
            "value": 24.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48178056 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - ns/op",
            "value": 24.88,
            "unit": "ns/op",
            "extra": "48178056 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48178056 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48178056 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed",
            "value": 24.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50140694 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - ns/op",
            "value": 24.01,
            "unit": "ns/op",
            "extra": "50140694 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50140694 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50140694 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle",
            "value": 664.8,
            "unit": "ns/op\t     208 B/op\t       6 allocs/op",
            "extra": "1819204 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - ns/op",
            "value": 664.8,
            "unit": "ns/op",
            "extra": "1819204 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - B/op",
            "value": 208,
            "unit": "B/op",
            "extra": "1819204 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1819204 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel",
            "value": 143.2,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "8401852 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - ns/op",
            "value": 143.2,
            "unit": "ns/op",
            "extra": "8401852 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "8401852 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8401852 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad",
            "value": 168.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6912958 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - ns/op",
            "value": 168.2,
            "unit": "ns/op",
            "extra": "6912958 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6912958 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6912958 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead",
            "value": 399.6,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3026595 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - ns/op",
            "value": 399.6,
            "unit": "ns/op",
            "extra": "3026595 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "3026595 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3026595 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket",
            "value": 79.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15011336 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - ns/op",
            "value": 79.73,
            "unit": "ns/op",
            "extra": "15011336 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15011336 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15011336 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket",
            "value": 80.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14844474 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - ns/op",
            "value": 80.82,
            "unit": "ns/op",
            "extra": "14844474 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14844474 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14844474 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow",
            "value": 288,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4166667 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - ns/op",
            "value": 288,
            "unit": "ns/op",
            "extra": "4166667 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4166667 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4166667 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket",
            "value": 97.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12186098 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - ns/op",
            "value": 97.62,
            "unit": "ns/op",
            "extra": "12186098 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12186098 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12186098 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket",
            "value": 98.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11232768 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - ns/op",
            "value": 98.54,
            "unit": "ns/op",
            "extra": "11232768 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11232768 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11232768 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow",
            "value": 43185,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46165 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - ns/op",
            "value": 43185,
            "unit": "ns/op",
            "extra": "46165 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46165 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46165 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d",
            "value": 79678,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15026 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - ns/op",
            "value": 79678,
            "unit": "ns/op",
            "extra": "15026 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15026 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15026 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d",
            "value": 80347,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14936 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - ns/op",
            "value": 80347,
            "unit": "ns/op",
            "extra": "14936 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14936 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14936 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d",
            "value": 487162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2478 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - ns/op",
            "value": 487162,
            "unit": "ns/op",
            "extra": "2478 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2478 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2478 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket",
            "value": 7961,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "150688 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - ns/op",
            "value": 7961,
            "unit": "ns/op",
            "extra": "150688 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "150688 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "150688 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket",
            "value": 8022,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149196 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - ns/op",
            "value": 8022,
            "unit": "ns/op",
            "extra": "149196 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "149196 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "149196 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow",
            "value": 28792,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41839 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - ns/op",
            "value": 28792,
            "unit": "ns/op",
            "extra": "41839 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41839 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41839 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow",
            "value": 80.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14824226 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - ns/op",
            "value": 80.94,
            "unit": "ns/op",
            "extra": "14824226 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14824226 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14824226 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN",
            "value": 80.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14856553 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - ns/op",
            "value": 80.8,
            "unit": "ns/op",
            "extra": "14856553 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14856553 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14856553 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak",
            "value": 73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16271442 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - ns/op",
            "value": 73,
            "unit": "ns/op",
            "extra": "16271442 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16271442 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16271442 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware",
            "value": 82.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14592103 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - ns/op",
            "value": 82.15,
            "unit": "ns/op",
            "extra": "14592103 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14592103 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14592103 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel",
            "value": 100.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11905702 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - ns/op",
            "value": 100.6,
            "unit": "ns/op",
            "extra": "11905702 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11905702 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11905702 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_",
            "value": 81.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14784498 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - ns/op",
            "value": 81.18,
            "unit": "ns/op",
            "extra": "14784498 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14784498 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14784498 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d",
            "value": 80.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14820565 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - ns/op",
            "value": 80.96,
            "unit": "ns/op",
            "extra": "14820565 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14820565 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14820565 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_",
            "value": 81.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14789372 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - ns/op",
            "value": 81.09,
            "unit": "ns/op",
            "extra": "14789372 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14789372 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14789372 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d",
            "value": 81.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14759014 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - ns/op",
            "value": 81.15,
            "unit": "ns/op",
            "extra": "14759014 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14759014 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14759014 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow",
            "value": 288.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4142766 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - ns/op",
            "value": 288.8,
            "unit": "ns/op",
            "extra": "4142766 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4142766 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4142766 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN",
            "value": 282.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4237148 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - ns/op",
            "value": 282.9,
            "unit": "ns/op",
            "extra": "4237148 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4237148 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4237148 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup",
            "value": 1388,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "859540 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - ns/op",
            "value": 1388,
            "unit": "ns/op",
            "extra": "859540 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "859540 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "859540 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware",
            "value": 293.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4105218 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - ns/op",
            "value": 293.3,
            "unit": "ns/op",
            "extra": "4105218 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4105218 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4105218 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel",
            "value": 61159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45034 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - ns/op",
            "value": 61159,
            "unit": "ns/op",
            "extra": "45034 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45034 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45034 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_",
            "value": 68.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17457784 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - ns/op",
            "value": 68.95,
            "unit": "ns/op",
            "extra": "17457784 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17457784 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17457784 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d",
            "value": 86.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13899021 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - ns/op",
            "value": 86.58,
            "unit": "ns/op",
            "extra": "13899021 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13899021 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13899021 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow",
            "value": 80.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14865686 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - ns/op",
            "value": 80.71,
            "unit": "ns/op",
            "extra": "14865686 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14865686 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14865686 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN",
            "value": 80.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14909790 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - ns/op",
            "value": 80.28,
            "unit": "ns/op",
            "extra": "14909790 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14909790 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14909790 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill",
            "value": 71.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16913114 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - ns/op",
            "value": 71.3,
            "unit": "ns/op",
            "extra": "16913114 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16913114 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16913114 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware",
            "value": 81.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14710066 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - ns/op",
            "value": 81.67,
            "unit": "ns/op",
            "extra": "14710066 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14710066 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14710066 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel",
            "value": 98.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12253213 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - ns/op",
            "value": 98.14,
            "unit": "ns/op",
            "extra": "12253213 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12253213 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12253213 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain",
            "value": 82.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14519768 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - ns/op",
            "value": 82.53,
            "unit": "ns/op",
            "extra": "14519768 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14519768 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14519768 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success",
            "value": 4.363,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "275174236 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - ns/op",
            "value": 4.363,
            "unit": "ns/op",
            "extra": "275174236 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "275174236 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "275174236 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess",
            "value": 845.2,
            "unit": "ns/op\t     528 B/op\t       8 allocs/op",
            "extra": "1421420 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - ns/op",
            "value": 845.2,
            "unit": "ns/op",
            "extra": "1421420 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - B/op",
            "value": 528,
            "unit": "B/op",
            "extra": "1421420 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "1421420 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail",
            "value": 883.2,
            "unit": "ns/op\t     544 B/op\t       9 allocs/op",
            "extra": "1354338 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - ns/op",
            "value": 883.2,
            "unit": "ns/op",
            "extra": "1354338 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - B/op",
            "value": 544,
            "unit": "B/op",
            "extra": "1354338 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1354338 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff",
            "value": 25.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47315073 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - ns/op",
            "value": 25.92,
            "unit": "ns/op",
            "extra": "47315073 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47315073 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47315073 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware",
            "value": 38.28,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "29499088 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - ns/op",
            "value": 38.28,
            "unit": "ns/op",
            "extra": "29499088 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "29499088 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "29499088 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries",
            "value": 953.9,
            "unit": "ns/op\t     584 B/op\t      11 allocs/op",
            "extra": "1255825 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - ns/op",
            "value": 953.9,
            "unit": "ns/op",
            "extra": "1255825 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - B/op",
            "value": 584,
            "unit": "B/op",
            "extra": "1255825 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "1255825 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain",
            "value": 39.77,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "29416800 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - ns/op",
            "value": 39.77,
            "unit": "ns/op",
            "extra": "29416800 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "29416800 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "29416800 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly",
            "value": 115.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10424932 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - ns/op",
            "value": 115.3,
            "unit": "ns/op",
            "extra": "10424932 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10424932 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10424932 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll",
            "value": 0.3125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll - ns/op",
            "value": 0.3125,
            "unit": "ns/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryNone",
            "value": 0.3121,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryNone - ns/op",
            "value": 0.3121,
            "unit": "ns/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryNone - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryNone - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine",
            "value": 118.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10099442 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - ns/op",
            "value": 118.2,
            "unit": "ns/op",
            "extra": "10099442 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10099442 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10099442 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry",
            "value": 21.95,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51561702 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - ns/op",
            "value": 21.95,
            "unit": "ns/op",
            "extra": "51561702 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "51561702 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "51561702 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts",
            "value": 452.7,
            "unit": "ns/op\t     280 B/op\t       5 allocs/op",
            "extra": "2654481 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - ns/op",
            "value": 452.7,
            "unit": "ns/op",
            "extra": "2654481 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - B/op",
            "value": 280,
            "unit": "B/op",
            "extra": "2654481 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2654481 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts",
            "value": 24566,
            "unit": "ns/op\t    2392 B/op\t      37 allocs/op",
            "extra": "48216 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - ns/op",
            "value": 24566,
            "unit": "ns/op",
            "extra": "48216 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - B/op",
            "value": 2392,
            "unit": "B/op",
            "extra": "48216 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "48216 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc",
            "value": 1639,
            "unit": "ns/op\t     304 B/op\t      27 allocs/op",
            "extra": "680571 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - ns/op",
            "value": 1639,
            "unit": "ns/op",
            "extra": "680571 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - B/op",
            "value": 304,
            "unit": "B/op",
            "extra": "680571 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "680571 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService",
            "value": 8.821,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "135979641 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - ns/op",
            "value": 8.821,
            "unit": "ns/op",
            "extra": "135979641 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "135979641 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "135979641 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint",
            "value": 99.87,
            "unit": "ns/op\t      92 B/op\t       0 allocs/op",
            "extra": "11119504 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - ns/op",
            "value": 99.87,
            "unit": "ns/op",
            "extra": "11119504 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - B/op",
            "value": 92,
            "unit": "B/op",
            "extra": "11119504 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11119504 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint",
            "value": 80.72,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "14571332 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - ns/op",
            "value": 80.72,
            "unit": "ns/op",
            "extra": "14571332 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "14571332 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "14571332 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware",
            "value": 88.64,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "13296933 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - ns/op",
            "value": 88.64,
            "unit": "ns/op",
            "extra": "13296933 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "13296933 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13296933 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister",
            "value": 2524,
            "unit": "ns/op\t    2648 B/op\t      33 allocs/op",
            "extra": "458784 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - ns/op",
            "value": 2524,
            "unit": "ns/op",
            "extra": "458784 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - B/op",
            "value": 2648,
            "unit": "B/op",
            "extra": "458784 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "458784 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode",
            "value": 243.1,
            "unit": "ns/op\t     128 B/op\t       3 allocs/op",
            "extra": "4874775 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - ns/op",
            "value": 243.1,
            "unit": "ns/op",
            "extra": "4874775 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "4874775 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4874775 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode",
            "value": 797.9,
            "unit": "ns/op\t     992 B/op\t       9 allocs/op",
            "extra": "1507635 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - ns/op",
            "value": 797.9,
            "unit": "ns/op",
            "extra": "1507635 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - B/op",
            "value": 992,
            "unit": "B/op",
            "extra": "1507635 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1507635 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling",
            "value": 105937,
            "unit": "ns/op\t    8810 B/op\t      99 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - ns/op",
            "value": 105937,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - B/op",
            "value": 8810,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow",
            "value": 110359,
            "unit": "ns/op\t    9278 B/op\t     107 allocs/op",
            "extra": "9939 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - ns/op",
            "value": 110359,
            "unit": "ns/op",
            "extra": "9939 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - B/op",
            "value": 9278,
            "unit": "B/op",
            "extra": "9939 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "9939 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery",
            "value": 59.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "19295167 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - ns/op",
            "value": 59.7,
            "unit": "ns/op",
            "extra": "19295167 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "19295167 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19295167 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2825841950@qq.com",
            "name": "HeZephyr",
            "username": "HeZephyr"
          },
          "committer": {
            "email": "2825841950@qq.com",
            "name": "HeZephyr",
            "username": "HeZephyr"
          },
          "distinct": true,
          "id": "ec9f5bc8b0f8f88597d0fd67773abebf4c5f1250",
          "message": "fix: handle error return values in retry benchmarks",
          "timestamp": "2025-02-28T17:25:23+08:00",
          "tree_id": "dd075d82b783ab9f0c001482c2cd0957eb08ff69",
          "url": "https://github.com/HeZephyr/GoMicroKit/commit/ec9f5bc8b0f8f88597d0fd67773abebf4c5f1250"
        },
        "date": 1740734881401,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogInfo",
            "value": 629.6,
            "unit": "ns/op\t     325 B/op\t       7 allocs/op",
            "extra": "1896416 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - ns/op",
            "value": 629.6,
            "unit": "ns/op",
            "extra": "1896416 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - B/op",
            "value": 325,
            "unit": "B/op",
            "extra": "1896416 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1896416 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField",
            "value": 1070,
            "unit": "ns/op\t     710 B/op\t      13 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - ns/op",
            "value": 1070,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - B/op",
            "value": 710,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields",
            "value": 2064,
            "unit": "ns/op\t    1063 B/op\t      22 allocs/op",
            "extra": "566515 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - ns/op",
            "value": 2064,
            "unit": "ns/op",
            "extra": "566515 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - B/op",
            "value": 1063,
            "unit": "B/op",
            "extra": "566515 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "566515 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting",
            "value": 1012,
            "unit": "ns/op\t     433 B/op\t       7 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - ns/op",
            "value": 1012,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - B/op",
            "value": 433,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister",
            "value": 138,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "8689016 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - ns/op",
            "value": 138,
            "unit": "ns/op",
            "extra": "8689016 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "8689016 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "8689016 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService",
            "value": 60.73,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "18726201 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - ns/op",
            "value": 60.73,
            "unit": "ns/op",
            "extra": "18726201 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "18726201 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "18726201 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister",
            "value": 120191,
            "unit": "ns/op\t  155660 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - ns/op",
            "value": 120191,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - B/op",
            "value": 155660,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow",
            "value": 10.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow - ns/op",
            "value": 10.69,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success",
            "value": 10.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - ns/op",
            "value": 10.31,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure",
            "value": 11.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - ns/op",
            "value": 11.46,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success",
            "value": 23.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51748504 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - ns/op",
            "value": 23.29,
            "unit": "ns/op",
            "extra": "51748504 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51748504 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51748504 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure",
            "value": 24.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48006363 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - ns/op",
            "value": 24.89,
            "unit": "ns/op",
            "extra": "48006363 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48006363 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48006363 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed",
            "value": 23.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50214028 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - ns/op",
            "value": 23.89,
            "unit": "ns/op",
            "extra": "50214028 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50214028 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50214028 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle",
            "value": 666.8,
            "unit": "ns/op\t     208 B/op\t       6 allocs/op",
            "extra": "1810093 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - ns/op",
            "value": 666.8,
            "unit": "ns/op",
            "extra": "1810093 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - B/op",
            "value": 208,
            "unit": "B/op",
            "extra": "1810093 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1810093 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel",
            "value": 145.6,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "8134568 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - ns/op",
            "value": 145.6,
            "unit": "ns/op",
            "extra": "8134568 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "8134568 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8134568 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad",
            "value": 182.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6548611 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - ns/op",
            "value": 182.1,
            "unit": "ns/op",
            "extra": "6548611 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6548611 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6548611 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead",
            "value": 394.5,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3020773 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - ns/op",
            "value": 394.5,
            "unit": "ns/op",
            "extra": "3020773 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "3020773 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3020773 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket",
            "value": 81.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15049240 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - ns/op",
            "value": 81.23,
            "unit": "ns/op",
            "extra": "15049240 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15049240 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15049240 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket",
            "value": 80.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14825594 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - ns/op",
            "value": 80.9,
            "unit": "ns/op",
            "extra": "14825594 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14825594 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14825594 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow",
            "value": 308.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3886604 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - ns/op",
            "value": 308.3,
            "unit": "ns/op",
            "extra": "3886604 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3886604 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3886604 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket",
            "value": 98.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12112396 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - ns/op",
            "value": 98.25,
            "unit": "ns/op",
            "extra": "12112396 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12112396 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12112396 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket",
            "value": 98.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12037836 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - ns/op",
            "value": 98.78,
            "unit": "ns/op",
            "extra": "12037836 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12037836 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12037836 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow",
            "value": 44493,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45266 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - ns/op",
            "value": 44493,
            "unit": "ns/op",
            "extra": "45266 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45266 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45266 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d",
            "value": 79706,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15018 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - ns/op",
            "value": 79706,
            "unit": "ns/op",
            "extra": "15018 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15018 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15018 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d",
            "value": 80361,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14908 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - ns/op",
            "value": 80361,
            "unit": "ns/op",
            "extra": "14908 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14908 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14908 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d",
            "value": 484903,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2467 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - ns/op",
            "value": 484903,
            "unit": "ns/op",
            "extra": "2467 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2467 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2467 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket",
            "value": 7967,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "150624 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - ns/op",
            "value": 7967,
            "unit": "ns/op",
            "extra": "150624 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "150624 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "150624 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket",
            "value": 8028,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "148694 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - ns/op",
            "value": 8028,
            "unit": "ns/op",
            "extra": "148694 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "148694 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "148694 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow",
            "value": 28712,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41871 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - ns/op",
            "value": 28712,
            "unit": "ns/op",
            "extra": "41871 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41871 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41871 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow",
            "value": 80.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14829768 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - ns/op",
            "value": 80.93,
            "unit": "ns/op",
            "extra": "14829768 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14829768 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14829768 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN",
            "value": 80.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14887813 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - ns/op",
            "value": 80.69,
            "unit": "ns/op",
            "extra": "14887813 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14887813 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14887813 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak",
            "value": 73.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16427523 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - ns/op",
            "value": 73.14,
            "unit": "ns/op",
            "extra": "16427523 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16427523 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16427523 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware",
            "value": 82.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14447158 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - ns/op",
            "value": 82.2,
            "unit": "ns/op",
            "extra": "14447158 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14447158 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14447158 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel",
            "value": 100.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11884695 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - ns/op",
            "value": 100.4,
            "unit": "ns/op",
            "extra": "11884695 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11884695 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11884695 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_",
            "value": 81.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14774325 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - ns/op",
            "value": 81.29,
            "unit": "ns/op",
            "extra": "14774325 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14774325 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14774325 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d",
            "value": 80.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14824303 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - ns/op",
            "value": 80.99,
            "unit": "ns/op",
            "extra": "14824303 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14824303 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14824303 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_",
            "value": 81.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14784654 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - ns/op",
            "value": 81.16,
            "unit": "ns/op",
            "extra": "14784654 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14784654 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14784654 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d",
            "value": 81.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14781316 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - ns/op",
            "value": 81.2,
            "unit": "ns/op",
            "extra": "14781316 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14781316 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14781316 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow",
            "value": 288.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4155816 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - ns/op",
            "value": 288.6,
            "unit": "ns/op",
            "extra": "4155816 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4155816 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4155816 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN",
            "value": 283.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4201476 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - ns/op",
            "value": 283.8,
            "unit": "ns/op",
            "extra": "4201476 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4201476 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4201476 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup",
            "value": 1391,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "851815 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - ns/op",
            "value": 1391,
            "unit": "ns/op",
            "extra": "851815 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "851815 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "851815 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware",
            "value": 294.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4100311 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - ns/op",
            "value": 294.5,
            "unit": "ns/op",
            "extra": "4100311 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4100311 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4100311 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel",
            "value": 62001,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46315 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - ns/op",
            "value": 62001,
            "unit": "ns/op",
            "extra": "46315 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46315 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46315 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_",
            "value": 69.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17444888 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - ns/op",
            "value": 69.02,
            "unit": "ns/op",
            "extra": "17444888 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17444888 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17444888 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d",
            "value": 87.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13927047 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - ns/op",
            "value": 87.17,
            "unit": "ns/op",
            "extra": "13927047 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13927047 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13927047 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow",
            "value": 80.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14880549 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - ns/op",
            "value": 80.54,
            "unit": "ns/op",
            "extra": "14880549 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14880549 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14880549 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN",
            "value": 80.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14938639 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - ns/op",
            "value": 80.21,
            "unit": "ns/op",
            "extra": "14938639 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14938639 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14938639 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill",
            "value": 70.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16786083 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - ns/op",
            "value": 70.94,
            "unit": "ns/op",
            "extra": "16786083 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16786083 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16786083 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware",
            "value": 82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14642030 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - ns/op",
            "value": 82,
            "unit": "ns/op",
            "extra": "14642030 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14642030 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14642030 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel",
            "value": 98.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12217472 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - ns/op",
            "value": 98.5,
            "unit": "ns/op",
            "extra": "12217472 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12217472 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12217472 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain",
            "value": 82.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14545894 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - ns/op",
            "value": 82.52,
            "unit": "ns/op",
            "extra": "14545894 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14545894 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14545894 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success",
            "value": 4.049,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "296301754 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - ns/op",
            "value": 4.049,
            "unit": "ns/op",
            "extra": "296301754 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "296301754 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "296301754 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess",
            "value": 2286,
            "unit": "ns/op\t     544 B/op\t      10 allocs/op",
            "extra": "517602 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - ns/op",
            "value": 2286,
            "unit": "ns/op",
            "extra": "517602 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - B/op",
            "value": 544,
            "unit": "B/op",
            "extra": "517602 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "517602 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail",
            "value": 2308,
            "unit": "ns/op\t     560 B/op\t      11 allocs/op",
            "extra": "486321 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - ns/op",
            "value": 2308,
            "unit": "ns/op",
            "extra": "486321 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - B/op",
            "value": 560,
            "unit": "B/op",
            "extra": "486321 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "486321 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff",
            "value": 681.6,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "1772780 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - ns/op",
            "value": 681.6,
            "unit": "ns/op",
            "extra": "1772780 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "1772780 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1772780 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware",
            "value": 38.35,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "29775534 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - ns/op",
            "value": 38.35,
            "unit": "ns/op",
            "extra": "29775534 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "29775534 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "29775534 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries",
            "value": 2427,
            "unit": "ns/op\t     600 B/op\t      13 allocs/op",
            "extra": "478866 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - ns/op",
            "value": 2427,
            "unit": "ns/op",
            "extra": "478866 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - B/op",
            "value": 600,
            "unit": "B/op",
            "extra": "478866 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "478866 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain",
            "value": 39.31,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "29107486 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - ns/op",
            "value": 39.31,
            "unit": "ns/op",
            "extra": "29107486 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "29107486 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "29107486 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly",
            "value": 117.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "9843342 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - ns/op",
            "value": 117.3,
            "unit": "ns/op",
            "extra": "9843342 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "9843342 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9843342 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll",
            "value": 0.3123,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll - ns/op",
            "value": 0.3123,
            "unit": "ns/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryNone",
            "value": 0.3172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryNone - ns/op",
            "value": 0.3172,
            "unit": "ns/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryNone - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryNone - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine",
            "value": 114,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10384844 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - ns/op",
            "value": 114,
            "unit": "ns/op",
            "extra": "10384844 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10384844 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10384844 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry",
            "value": 21.48,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "49509723 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - ns/op",
            "value": 21.48,
            "unit": "ns/op",
            "extra": "49509723 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "49509723 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "49509723 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts",
            "value": 1184,
            "unit": "ns/op\t     288 B/op\t       6 allocs/op",
            "extra": "943741 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - ns/op",
            "value": 1184,
            "unit": "ns/op",
            "extra": "943741 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "943741 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "943741 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts",
            "value": 21317,
            "unit": "ns/op\t    2464 B/op\t      46 allocs/op",
            "extra": "55016 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - ns/op",
            "value": 21317,
            "unit": "ns/op",
            "extra": "55016 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - B/op",
            "value": 2464,
            "unit": "B/op",
            "extra": "55016 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - allocs/op",
            "value": 46,
            "unit": "allocs/op",
            "extra": "55016 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc",
            "value": 1642,
            "unit": "ns/op\t     304 B/op\t      27 allocs/op",
            "extra": "690574 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - ns/op",
            "value": 1642,
            "unit": "ns/op",
            "extra": "690574 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - B/op",
            "value": 304,
            "unit": "B/op",
            "extra": "690574 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "690574 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService",
            "value": 8.283,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "143748254 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - ns/op",
            "value": 8.283,
            "unit": "ns/op",
            "extra": "143748254 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "143748254 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "143748254 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint",
            "value": 85.5,
            "unit": "ns/op\t      81 B/op\t       0 allocs/op",
            "extra": "12763430 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - ns/op",
            "value": 85.5,
            "unit": "ns/op",
            "extra": "12763430 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - B/op",
            "value": 81,
            "unit": "B/op",
            "extra": "12763430 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12763430 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint",
            "value": 80.43,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "14965282 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - ns/op",
            "value": 80.43,
            "unit": "ns/op",
            "extra": "14965282 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "14965282 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "14965282 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware",
            "value": 89.47,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "13428094 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - ns/op",
            "value": 89.47,
            "unit": "ns/op",
            "extra": "13428094 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "13428094 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13428094 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister",
            "value": 2531,
            "unit": "ns/op\t    2648 B/op\t      33 allocs/op",
            "extra": "464196 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - ns/op",
            "value": 2531,
            "unit": "ns/op",
            "extra": "464196 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - B/op",
            "value": 2648,
            "unit": "B/op",
            "extra": "464196 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "464196 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode",
            "value": 242.9,
            "unit": "ns/op\t     128 B/op\t       3 allocs/op",
            "extra": "4914639 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - ns/op",
            "value": 242.9,
            "unit": "ns/op",
            "extra": "4914639 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "4914639 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4914639 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode",
            "value": 824.8,
            "unit": "ns/op\t     992 B/op\t       9 allocs/op",
            "extra": "1503654 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - ns/op",
            "value": 824.8,
            "unit": "ns/op",
            "extra": "1503654 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - B/op",
            "value": 992,
            "unit": "B/op",
            "extra": "1503654 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1503654 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling",
            "value": 106879,
            "unit": "ns/op\t    8828 B/op\t      99 allocs/op",
            "extra": "9873 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - ns/op",
            "value": 106879,
            "unit": "ns/op",
            "extra": "9873 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - B/op",
            "value": 8828,
            "unit": "B/op",
            "extra": "9873 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "9873 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow",
            "value": 112591,
            "unit": "ns/op\t    9276 B/op\t     107 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - ns/op",
            "value": 112591,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - B/op",
            "value": 9276,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery",
            "value": 59.56,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "20005477 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - ns/op",
            "value": 59.56,
            "unit": "ns/op",
            "extra": "20005477 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "20005477 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "20005477 times\n4 procs"
          }
        ]
      }
    ]
  }
}