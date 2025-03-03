window.BENCHMARK_DATA = {
  "lastUpdate": 1740992264418,
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
          "id": "52097e2024852f91ed4bb3655dad2ab1036e2f94",
          "message": "fix: handle error return values in ratelimit benchmarks",
          "timestamp": "2025-02-28T17:32:18+08:00",
          "tree_id": "6b1ee458ba3c505c7d1a46ec8335deb06dcbcf16",
          "url": "https://github.com/HeZephyr/GoMicroKit/commit/52097e2024852f91ed4bb3655dad2ab1036e2f94"
        },
        "date": 1740735315718,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogInfo",
            "value": 633.9,
            "unit": "ns/op\t     324 B/op\t       7 allocs/op",
            "extra": "1912854 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - ns/op",
            "value": 633.9,
            "unit": "ns/op",
            "extra": "1912854 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - B/op",
            "value": 324,
            "unit": "B/op",
            "extra": "1912854 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1912854 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField",
            "value": 1051,
            "unit": "ns/op\t     714 B/op\t      13 allocs/op",
            "extra": "972388 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - ns/op",
            "value": 1051,
            "unit": "ns/op",
            "extra": "972388 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - B/op",
            "value": 714,
            "unit": "B/op",
            "extra": "972388 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "972388 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields",
            "value": 2163,
            "unit": "ns/op\t    1070 B/op\t      22 allocs/op",
            "extra": "551265 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - ns/op",
            "value": 2163,
            "unit": "ns/op",
            "extra": "551265 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - B/op",
            "value": 1070,
            "unit": "B/op",
            "extra": "551265 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "551265 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting",
            "value": 1011,
            "unit": "ns/op\t     433 B/op\t       7 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - ns/op",
            "value": 1011,
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
            "value": 137,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "8701773 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - ns/op",
            "value": 137,
            "unit": "ns/op",
            "extra": "8701773 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "8701773 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8701773 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService",
            "value": 50.88,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "23272443 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - ns/op",
            "value": 50.88,
            "unit": "ns/op",
            "extra": "23272443 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "23272443 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "23272443 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister",
            "value": 116866,
            "unit": "ns/op\t  155660 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - ns/op",
            "value": 116866,
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
            "value": 10.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - ns/op",
            "value": 10.34,
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
            "value": 11.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - ns/op",
            "value": 11.57,
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
            "extra": "51969654 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - ns/op",
            "value": 23.07,
            "unit": "ns/op",
            "extra": "51969654 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51969654 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51969654 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure",
            "value": 24.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48253110 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - ns/op",
            "value": 24.85,
            "unit": "ns/op",
            "extra": "48253110 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48253110 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48253110 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed",
            "value": 23.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50282731 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - ns/op",
            "value": 23.92,
            "unit": "ns/op",
            "extra": "50282731 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50282731 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50282731 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle",
            "value": 667.7,
            "unit": "ns/op\t     208 B/op\t       6 allocs/op",
            "extra": "1820112 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - ns/op",
            "value": 667.7,
            "unit": "ns/op",
            "extra": "1820112 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - B/op",
            "value": 208,
            "unit": "B/op",
            "extra": "1820112 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1820112 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel",
            "value": 144,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "8379514 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - ns/op",
            "value": 144,
            "unit": "ns/op",
            "extra": "8379514 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "8379514 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8379514 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad",
            "value": 168.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6998940 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - ns/op",
            "value": 168.5,
            "unit": "ns/op",
            "extra": "6998940 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6998940 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6998940 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead",
            "value": 394.5,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3032780 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - ns/op",
            "value": 394.5,
            "unit": "ns/op",
            "extra": "3032780 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "3032780 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3032780 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket",
            "value": 79.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15031227 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - ns/op",
            "value": 79.74,
            "unit": "ns/op",
            "extra": "15031227 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15031227 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15031227 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket",
            "value": 80.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14858934 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - ns/op",
            "value": 80.86,
            "unit": "ns/op",
            "extra": "14858934 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14858934 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14858934 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow",
            "value": 288.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4150935 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - ns/op",
            "value": 288.8,
            "unit": "ns/op",
            "extra": "4150935 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4150935 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4150935 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket",
            "value": 98.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12173630 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - ns/op",
            "value": 98.71,
            "unit": "ns/op",
            "extra": "12173630 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12173630 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12173630 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket",
            "value": 98.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12232732 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - ns/op",
            "value": 98.9,
            "unit": "ns/op",
            "extra": "12232732 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12232732 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12232732 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow",
            "value": 44973,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44910 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - ns/op",
            "value": 44973,
            "unit": "ns/op",
            "extra": "44910 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44910 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44910 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d",
            "value": 79748,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15063 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - ns/op",
            "value": 79748,
            "unit": "ns/op",
            "extra": "15063 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15063 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15063 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d",
            "value": 80335,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14928 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - ns/op",
            "value": 80335,
            "unit": "ns/op",
            "extra": "14928 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14928 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14928 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d",
            "value": 484678,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2476 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - ns/op",
            "value": 484678,
            "unit": "ns/op",
            "extra": "2476 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2476 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2476 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket",
            "value": 7960,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "150283 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - ns/op",
            "value": 7960,
            "unit": "ns/op",
            "extra": "150283 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "150283 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "150283 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket",
            "value": 8030,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149014 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - ns/op",
            "value": 8030,
            "unit": "ns/op",
            "extra": "149014 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "149014 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "149014 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow",
            "value": 28744,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41755 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - ns/op",
            "value": 28744,
            "unit": "ns/op",
            "extra": "41755 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41755 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41755 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow",
            "value": 80.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14821134 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - ns/op",
            "value": 80.88,
            "unit": "ns/op",
            "extra": "14821134 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14821134 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14821134 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN",
            "value": 80.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14866902 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - ns/op",
            "value": 80.63,
            "unit": "ns/op",
            "extra": "14866902 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14866902 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14866902 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak",
            "value": 73.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16379742 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - ns/op",
            "value": 73.23,
            "unit": "ns/op",
            "extra": "16379742 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16379742 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16379742 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware",
            "value": 82.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14612943 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - ns/op",
            "value": 82.21,
            "unit": "ns/op",
            "extra": "14612943 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14612943 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14612943 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel",
            "value": 100.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11871044 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - ns/op",
            "value": 100.5,
            "unit": "ns/op",
            "extra": "11871044 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11871044 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11871044 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_",
            "value": 81.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14732845 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - ns/op",
            "value": 81.38,
            "unit": "ns/op",
            "extra": "14732845 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14732845 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14732845 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d",
            "value": 80.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14816299 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - ns/op",
            "value": 80.98,
            "unit": "ns/op",
            "extra": "14816299 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14816299 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14816299 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_",
            "value": 81.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14763405 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - ns/op",
            "value": 81.02,
            "unit": "ns/op",
            "extra": "14763405 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14763405 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14763405 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d",
            "value": 80.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14795300 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - ns/op",
            "value": 80.92,
            "unit": "ns/op",
            "extra": "14795300 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14795300 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14795300 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow",
            "value": 288.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4160677 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - ns/op",
            "value": 288.3,
            "unit": "ns/op",
            "extra": "4160677 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4160677 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4160677 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN",
            "value": 282.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4252152 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - ns/op",
            "value": 282.3,
            "unit": "ns/op",
            "extra": "4252152 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4252152 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4252152 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup",
            "value": 1381,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "869936 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - ns/op",
            "value": 1381,
            "unit": "ns/op",
            "extra": "869936 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "869936 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "869936 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware",
            "value": 295.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4070107 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - ns/op",
            "value": 295.7,
            "unit": "ns/op",
            "extra": "4070107 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4070107 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4070107 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel",
            "value": 62784,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48156 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - ns/op",
            "value": 62784,
            "unit": "ns/op",
            "extra": "48156 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48156 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48156 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_",
            "value": 68.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17393628 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - ns/op",
            "value": 68.75,
            "unit": "ns/op",
            "extra": "17393628 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17393628 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17393628 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d",
            "value": 87.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13844668 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - ns/op",
            "value": 87.55,
            "unit": "ns/op",
            "extra": "13844668 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13844668 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13844668 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow",
            "value": 80.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14763279 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - ns/op",
            "value": 80.73,
            "unit": "ns/op",
            "extra": "14763279 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14763279 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14763279 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN",
            "value": 80.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14944359 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - ns/op",
            "value": 80.32,
            "unit": "ns/op",
            "extra": "14944359 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14944359 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14944359 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill",
            "value": 71.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16900868 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - ns/op",
            "value": 71.08,
            "unit": "ns/op",
            "extra": "16900868 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16900868 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16900868 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware",
            "value": 81.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14660336 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - ns/op",
            "value": 81.78,
            "unit": "ns/op",
            "extra": "14660336 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14660336 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14660336 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel",
            "value": 98.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12241461 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - ns/op",
            "value": 98.3,
            "unit": "ns/op",
            "extra": "12241461 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12241461 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12241461 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain",
            "value": 82.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14499136 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - ns/op",
            "value": 82.64,
            "unit": "ns/op",
            "extra": "14499136 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14499136 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14499136 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success",
            "value": 4.049,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "295796478 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - ns/op",
            "value": 4.049,
            "unit": "ns/op",
            "extra": "295796478 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "295796478 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "295796478 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess",
            "value": 2279,
            "unit": "ns/op\t     544 B/op\t      10 allocs/op",
            "extra": "520934 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - ns/op",
            "value": 2279,
            "unit": "ns/op",
            "extra": "520934 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - B/op",
            "value": 544,
            "unit": "B/op",
            "extra": "520934 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "520934 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail",
            "value": 2327,
            "unit": "ns/op\t     560 B/op\t      11 allocs/op",
            "extra": "504324 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - ns/op",
            "value": 2327,
            "unit": "ns/op",
            "extra": "504324 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - B/op",
            "value": 560,
            "unit": "B/op",
            "extra": "504324 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "504324 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff",
            "value": 687.4,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "1762969 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - ns/op",
            "value": 687.4,
            "unit": "ns/op",
            "extra": "1762969 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "1762969 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1762969 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware",
            "value": 37.88,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "26944060 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - ns/op",
            "value": 37.88,
            "unit": "ns/op",
            "extra": "26944060 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "26944060 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "26944060 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries",
            "value": 2406,
            "unit": "ns/op\t     600 B/op\t      13 allocs/op",
            "extra": "473220 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - ns/op",
            "value": 2406,
            "unit": "ns/op",
            "extra": "473220 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - B/op",
            "value": 600,
            "unit": "B/op",
            "extra": "473220 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "473220 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain",
            "value": 39.54,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "26695696 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - ns/op",
            "value": 39.54,
            "unit": "ns/op",
            "extra": "26695696 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "26695696 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "26695696 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly",
            "value": 117.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10236768 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - ns/op",
            "value": 117.6,
            "unit": "ns/op",
            "extra": "10236768 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10236768 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10236768 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll",
            "value": 0.3111,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll - ns/op",
            "value": 0.3111,
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
            "value": 0.3136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryNone - ns/op",
            "value": 0.3136,
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
            "value": 112.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10455237 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - ns/op",
            "value": 112.9,
            "unit": "ns/op",
            "extra": "10455237 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10455237 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10455237 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry",
            "value": 21.35,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "52668206 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - ns/op",
            "value": 21.35,
            "unit": "ns/op",
            "extra": "52668206 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "52668206 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "52668206 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts",
            "value": 1182,
            "unit": "ns/op\t     288 B/op\t       6 allocs/op",
            "extra": "946380 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - ns/op",
            "value": 1182,
            "unit": "ns/op",
            "extra": "946380 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "946380 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "946380 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts",
            "value": 22759,
            "unit": "ns/op\t    2464 B/op\t      46 allocs/op",
            "extra": "50368 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - ns/op",
            "value": 22759,
            "unit": "ns/op",
            "extra": "50368 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - B/op",
            "value": 2464,
            "unit": "B/op",
            "extra": "50368 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - allocs/op",
            "value": 46,
            "unit": "allocs/op",
            "extra": "50368 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc",
            "value": 1634,
            "unit": "ns/op\t     304 B/op\t      27 allocs/op",
            "extra": "686042 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - ns/op",
            "value": 1634,
            "unit": "ns/op",
            "extra": "686042 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - B/op",
            "value": 304,
            "unit": "B/op",
            "extra": "686042 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "686042 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService",
            "value": 8.322,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "144090992 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - ns/op",
            "value": 8.322,
            "unit": "ns/op",
            "extra": "144090992 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "144090992 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "144090992 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint",
            "value": 80.54,
            "unit": "ns/op\t      87 B/op\t       0 allocs/op",
            "extra": "14823877 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - ns/op",
            "value": 80.54,
            "unit": "ns/op",
            "extra": "14823877 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - B/op",
            "value": 87,
            "unit": "B/op",
            "extra": "14823877 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14823877 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint",
            "value": 81.61,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "14839885 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - ns/op",
            "value": 81.61,
            "unit": "ns/op",
            "extra": "14839885 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "14839885 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "14839885 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware",
            "value": 89.01,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "13334295 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - ns/op",
            "value": 89.01,
            "unit": "ns/op",
            "extra": "13334295 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "13334295 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13334295 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister",
            "value": 2534,
            "unit": "ns/op\t    2648 B/op\t      33 allocs/op",
            "extra": "464475 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - ns/op",
            "value": 2534,
            "unit": "ns/op",
            "extra": "464475 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - B/op",
            "value": 2648,
            "unit": "B/op",
            "extra": "464475 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "464475 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode",
            "value": 246.5,
            "unit": "ns/op\t     128 B/op\t       3 allocs/op",
            "extra": "4849837 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - ns/op",
            "value": 246.5,
            "unit": "ns/op",
            "extra": "4849837 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "4849837 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4849837 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode",
            "value": 790.8,
            "unit": "ns/op\t     992 B/op\t       9 allocs/op",
            "extra": "1514416 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - ns/op",
            "value": 790.8,
            "unit": "ns/op",
            "extra": "1514416 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - B/op",
            "value": 992,
            "unit": "B/op",
            "extra": "1514416 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1514416 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling",
            "value": 110202,
            "unit": "ns/op\t    8827 B/op\t      99 allocs/op",
            "extra": "9849 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - ns/op",
            "value": 110202,
            "unit": "ns/op",
            "extra": "9849 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - B/op",
            "value": 8827,
            "unit": "B/op",
            "extra": "9849 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "9849 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow",
            "value": 115449,
            "unit": "ns/op\t    9288 B/op\t     107 allocs/op",
            "extra": "9424 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - ns/op",
            "value": 115449,
            "unit": "ns/op",
            "extra": "9424 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - B/op",
            "value": 9288,
            "unit": "B/op",
            "extra": "9424 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "9424 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery",
            "value": 59.37,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "19839226 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - ns/op",
            "value": 59.37,
            "unit": "ns/op",
            "extra": "19839226 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "19839226 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19839226 times\n4 procs"
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
          "id": "c653a47ee7c83c1c06370376cb7eabc9544fa748",
          "message": "fix: handle error return values in ratelimit benchmarks",
          "timestamp": "2025-02-28T17:36:06+08:00",
          "tree_id": "fd13638f143723b9f91be653b7e93b66ec8dd92d",
          "url": "https://github.com/HeZephyr/GoMicroKit/commit/c653a47ee7c83c1c06370376cb7eabc9544fa748"
        },
        "date": 1740735610120,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogInfo",
            "value": 625.2,
            "unit": "ns/op\t     331 B/op\t       7 allocs/op",
            "extra": "1824642 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - ns/op",
            "value": 625.2,
            "unit": "ns/op",
            "extra": "1824642 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - B/op",
            "value": 331,
            "unit": "B/op",
            "extra": "1824642 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1824642 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField",
            "value": 1058,
            "unit": "ns/op\t     714 B/op\t      13 allocs/op",
            "extra": "972424 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - ns/op",
            "value": 1058,
            "unit": "ns/op",
            "extra": "972424 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - B/op",
            "value": 714,
            "unit": "B/op",
            "extra": "972424 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "972424 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields",
            "value": 2044,
            "unit": "ns/op\t    1070 B/op\t      22 allocs/op",
            "extra": "550831 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - ns/op",
            "value": 2044,
            "unit": "ns/op",
            "extra": "550831 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - B/op",
            "value": 1070,
            "unit": "B/op",
            "extra": "550831 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "550831 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting",
            "value": 1013,
            "unit": "ns/op\t     433 B/op\t       7 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - ns/op",
            "value": 1013,
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
            "value": 137.9,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "8778332 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - ns/op",
            "value": 137.9,
            "unit": "ns/op",
            "extra": "8778332 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "8778332 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8778332 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService",
            "value": 50.28,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "23109080 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - ns/op",
            "value": 50.28,
            "unit": "ns/op",
            "extra": "23109080 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "23109080 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "23109080 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister",
            "value": 119647,
            "unit": "ns/op\t  155660 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - ns/op",
            "value": 119647,
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
            "value": 10.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow - ns/op",
            "value": 10.72,
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
            "value": 11.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - ns/op",
            "value": 11.48,
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
            "extra": "45048732 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - ns/op",
            "value": 23.07,
            "unit": "ns/op",
            "extra": "45048732 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45048732 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45048732 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure",
            "value": 24.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47575192 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - ns/op",
            "value": 24.86,
            "unit": "ns/op",
            "extra": "47575192 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47575192 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47575192 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed",
            "value": 24.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48459904 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - ns/op",
            "value": 24.1,
            "unit": "ns/op",
            "extra": "48459904 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48459904 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48459904 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle",
            "value": 654.9,
            "unit": "ns/op\t     208 B/op\t       6 allocs/op",
            "extra": "1831172 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - ns/op",
            "value": 654.9,
            "unit": "ns/op",
            "extra": "1831172 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - B/op",
            "value": 208,
            "unit": "B/op",
            "extra": "1831172 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1831172 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel",
            "value": 143.7,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "8354653 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - ns/op",
            "value": 143.7,
            "unit": "ns/op",
            "extra": "8354653 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "8354653 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8354653 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad",
            "value": 172.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6897968 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - ns/op",
            "value": 172.9,
            "unit": "ns/op",
            "extra": "6897968 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6897968 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6897968 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead",
            "value": 395.6,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3024445 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - ns/op",
            "value": 395.6,
            "unit": "ns/op",
            "extra": "3024445 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "3024445 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3024445 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket",
            "value": 79.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15021691 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - ns/op",
            "value": 79.74,
            "unit": "ns/op",
            "extra": "15021691 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15021691 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15021691 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket",
            "value": 80.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14850544 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - ns/op",
            "value": 80.81,
            "unit": "ns/op",
            "extra": "14850544 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14850544 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14850544 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow",
            "value": 288.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4157628 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - ns/op",
            "value": 288.6,
            "unit": "ns/op",
            "extra": "4157628 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4157628 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4157628 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket",
            "value": 98.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12277412 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - ns/op",
            "value": 98.04,
            "unit": "ns/op",
            "extra": "12277412 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12277412 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12277412 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket",
            "value": 98.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12149610 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - ns/op",
            "value": 98.63,
            "unit": "ns/op",
            "extra": "12149610 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12149610 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12149610 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow",
            "value": 43164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45913 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - ns/op",
            "value": 43164,
            "unit": "ns/op",
            "extra": "45913 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45913 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45913 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d",
            "value": 79836,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15020 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - ns/op",
            "value": 79836,
            "unit": "ns/op",
            "extra": "15020 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15020 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15020 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d",
            "value": 80312,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14937 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - ns/op",
            "value": 80312,
            "unit": "ns/op",
            "extra": "14937 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14937 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14937 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d",
            "value": 498703,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2470 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - ns/op",
            "value": 498703,
            "unit": "ns/op",
            "extra": "2470 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2470 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2470 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket",
            "value": 7965,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "150614 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - ns/op",
            "value": 7965,
            "unit": "ns/op",
            "extra": "150614 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "150614 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "150614 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket",
            "value": 8029,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149472 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - ns/op",
            "value": 8029,
            "unit": "ns/op",
            "extra": "149472 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "149472 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "149472 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow",
            "value": 28873,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41733 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - ns/op",
            "value": 28873,
            "unit": "ns/op",
            "extra": "41733 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41733 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41733 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow",
            "value": 80.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14831770 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - ns/op",
            "value": 80.87,
            "unit": "ns/op",
            "extra": "14831770 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14831770 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14831770 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN",
            "value": 80.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14901910 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - ns/op",
            "value": 80.65,
            "unit": "ns/op",
            "extra": "14901910 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14901910 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14901910 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak",
            "value": 73.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16351708 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - ns/op",
            "value": 73.84,
            "unit": "ns/op",
            "extra": "16351708 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16351708 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16351708 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware",
            "value": 82.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14601516 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - ns/op",
            "value": 82.37,
            "unit": "ns/op",
            "extra": "14601516 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14601516 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14601516 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel",
            "value": 100.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11807458 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - ns/op",
            "value": 100.5,
            "unit": "ns/op",
            "extra": "11807458 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11807458 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11807458 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_",
            "value": 81.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14768295 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - ns/op",
            "value": 81.23,
            "unit": "ns/op",
            "extra": "14768295 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14768295 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14768295 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d",
            "value": 82.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14814807 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - ns/op",
            "value": 82.33,
            "unit": "ns/op",
            "extra": "14814807 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14814807 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14814807 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_",
            "value": 81.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14806513 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - ns/op",
            "value": 81.01,
            "unit": "ns/op",
            "extra": "14806513 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14806513 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14806513 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d",
            "value": 81.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14798738 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - ns/op",
            "value": 81.16,
            "unit": "ns/op",
            "extra": "14798738 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14798738 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14798738 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow",
            "value": 288.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4173132 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - ns/op",
            "value": 288.4,
            "unit": "ns/op",
            "extra": "4173132 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4173132 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4173132 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN",
            "value": 282.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4228696 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - ns/op",
            "value": 282.3,
            "unit": "ns/op",
            "extra": "4228696 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4228696 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4228696 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup",
            "value": 1379,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "864820 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - ns/op",
            "value": 1379,
            "unit": "ns/op",
            "extra": "864820 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "864820 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "864820 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware",
            "value": 292.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4102890 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - ns/op",
            "value": 292.7,
            "unit": "ns/op",
            "extra": "4102890 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4102890 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4102890 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel",
            "value": 60864,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45129 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - ns/op",
            "value": 60864,
            "unit": "ns/op",
            "extra": "45129 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45129 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45129 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_",
            "value": 68.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17424871 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - ns/op",
            "value": 68.84,
            "unit": "ns/op",
            "extra": "17424871 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17424871 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17424871 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d",
            "value": 86.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13956528 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - ns/op",
            "value": 86.33,
            "unit": "ns/op",
            "extra": "13956528 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13956528 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13956528 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow",
            "value": 80.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14861178 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - ns/op",
            "value": 80.73,
            "unit": "ns/op",
            "extra": "14861178 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14861178 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14861178 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN",
            "value": 80.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14939942 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - ns/op",
            "value": 80.41,
            "unit": "ns/op",
            "extra": "14939942 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14939942 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14939942 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill",
            "value": 70.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16890930 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - ns/op",
            "value": 70.77,
            "unit": "ns/op",
            "extra": "16890930 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16890930 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16890930 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware",
            "value": 81.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14600404 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - ns/op",
            "value": 81.77,
            "unit": "ns/op",
            "extra": "14600404 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14600404 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14600404 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel",
            "value": 99.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12162320 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - ns/op",
            "value": 99.34,
            "unit": "ns/op",
            "extra": "12162320 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12162320 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12162320 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain",
            "value": 82.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14529774 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - ns/op",
            "value": 82.47,
            "unit": "ns/op",
            "extra": "14529774 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14529774 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14529774 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success",
            "value": 4.061,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "296629442 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - ns/op",
            "value": 4.061,
            "unit": "ns/op",
            "extra": "296629442 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "296629442 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "296629442 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess",
            "value": 2265,
            "unit": "ns/op\t     544 B/op\t      10 allocs/op",
            "extra": "518283 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - ns/op",
            "value": 2265,
            "unit": "ns/op",
            "extra": "518283 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - B/op",
            "value": 544,
            "unit": "B/op",
            "extra": "518283 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "518283 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail",
            "value": 2328,
            "unit": "ns/op\t     560 B/op\t      11 allocs/op",
            "extra": "488613 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - ns/op",
            "value": 2328,
            "unit": "ns/op",
            "extra": "488613 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - B/op",
            "value": 560,
            "unit": "B/op",
            "extra": "488613 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "488613 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff",
            "value": 680.2,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "1753416 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - ns/op",
            "value": 680.2,
            "unit": "ns/op",
            "extra": "1753416 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "1753416 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1753416 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware",
            "value": 37.86,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "28966141 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - ns/op",
            "value": 37.86,
            "unit": "ns/op",
            "extra": "28966141 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "28966141 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "28966141 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries",
            "value": 2383,
            "unit": "ns/op\t     600 B/op\t      13 allocs/op",
            "extra": "477308 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - ns/op",
            "value": 2383,
            "unit": "ns/op",
            "extra": "477308 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - B/op",
            "value": 600,
            "unit": "B/op",
            "extra": "477308 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "477308 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain",
            "value": 39.68,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "29945065 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - ns/op",
            "value": 39.68,
            "unit": "ns/op",
            "extra": "29945065 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "29945065 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "29945065 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly",
            "value": 115.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10320282 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - ns/op",
            "value": 115.8,
            "unit": "ns/op",
            "extra": "10320282 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10320282 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10320282 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll",
            "value": 0.3147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll - ns/op",
            "value": 0.3147,
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
            "value": 0.3115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryNone - ns/op",
            "value": 0.3115,
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
            "value": 116.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10151052 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - ns/op",
            "value": 116.1,
            "unit": "ns/op",
            "extra": "10151052 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10151052 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10151052 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry",
            "value": 21.4,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "52218507 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - ns/op",
            "value": 21.4,
            "unit": "ns/op",
            "extra": "52218507 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "52218507 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "52218507 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts",
            "value": 1175,
            "unit": "ns/op\t     288 B/op\t       6 allocs/op",
            "extra": "942742 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - ns/op",
            "value": 1175,
            "unit": "ns/op",
            "extra": "942742 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "942742 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "942742 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts",
            "value": 22461,
            "unit": "ns/op\t    2464 B/op\t      46 allocs/op",
            "extra": "53470 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - ns/op",
            "value": 22461,
            "unit": "ns/op",
            "extra": "53470 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - B/op",
            "value": 2464,
            "unit": "B/op",
            "extra": "53470 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - allocs/op",
            "value": 46,
            "unit": "allocs/op",
            "extra": "53470 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc",
            "value": 1642,
            "unit": "ns/op\t     304 B/op\t      27 allocs/op",
            "extra": "691429 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - ns/op",
            "value": 1642,
            "unit": "ns/op",
            "extra": "691429 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - B/op",
            "value": 304,
            "unit": "B/op",
            "extra": "691429 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "691429 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService",
            "value": 8.527,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "143763546 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - ns/op",
            "value": 8.527,
            "unit": "ns/op",
            "extra": "143763546 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "143763546 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "143763546 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint",
            "value": 106.7,
            "unit": "ns/op\t      96 B/op\t       0 allocs/op",
            "extra": "13372512 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - ns/op",
            "value": 106.7,
            "unit": "ns/op",
            "extra": "13372512 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "13372512 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13372512 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint",
            "value": 85.64,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "13884799 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - ns/op",
            "value": 85.64,
            "unit": "ns/op",
            "extra": "13884799 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "13884799 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "13884799 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware",
            "value": 91.66,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "12987057 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - ns/op",
            "value": 91.66,
            "unit": "ns/op",
            "extra": "12987057 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "12987057 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "12987057 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister",
            "value": 2540,
            "unit": "ns/op\t    2648 B/op\t      33 allocs/op",
            "extra": "461215 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - ns/op",
            "value": 2540,
            "unit": "ns/op",
            "extra": "461215 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - B/op",
            "value": 2648,
            "unit": "B/op",
            "extra": "461215 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "461215 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode",
            "value": 243.3,
            "unit": "ns/op\t     128 B/op\t       3 allocs/op",
            "extra": "4926352 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - ns/op",
            "value": 243.3,
            "unit": "ns/op",
            "extra": "4926352 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "4926352 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4926352 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode",
            "value": 795.7,
            "unit": "ns/op\t     992 B/op\t       9 allocs/op",
            "extra": "1509302 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - ns/op",
            "value": 795.7,
            "unit": "ns/op",
            "extra": "1509302 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - B/op",
            "value": 992,
            "unit": "B/op",
            "extra": "1509302 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1509302 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling",
            "value": 109516,
            "unit": "ns/op\t    8811 B/op\t      99 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - ns/op",
            "value": 109516,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - B/op",
            "value": 8811,
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
            "value": 110544,
            "unit": "ns/op\t    9281 B/op\t     107 allocs/op",
            "extra": "9894 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - ns/op",
            "value": 110544,
            "unit": "ns/op",
            "extra": "9894 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - B/op",
            "value": 9281,
            "unit": "B/op",
            "extra": "9894 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "9894 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery",
            "value": 59.65,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "19888146 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - ns/op",
            "value": 59.65,
            "unit": "ns/op",
            "extra": "19888146 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "19888146 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19888146 times\n4 procs"
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
          "id": "13a436ba9a4a706d153e980ca76c0539d3a3a257",
          "message": "refactor: update the project structure",
          "timestamp": "2025-03-03T11:30:32+08:00",
          "tree_id": "4b6fdafefac95e640b62cd86fb562910ee46c2b6",
          "url": "https://github.com/HeZephyr/GoMicroKit/commit/13a436ba9a4a706d153e980ca76c0539d3a3a257"
        },
        "date": 1740972801693,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogInfo",
            "value": 624.6,
            "unit": "ns/op\t     324 B/op\t       7 allocs/op",
            "extra": "1903908 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - ns/op",
            "value": 624.6,
            "unit": "ns/op",
            "extra": "1903908 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - B/op",
            "value": 324,
            "unit": "B/op",
            "extra": "1903908 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1903908 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField",
            "value": 1123,
            "unit": "ns/op\t     712 B/op\t      13 allocs/op",
            "extra": "985113 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - ns/op",
            "value": 1123,
            "unit": "ns/op",
            "extra": "985113 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - B/op",
            "value": 712,
            "unit": "B/op",
            "extra": "985113 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "985113 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields",
            "value": 2080,
            "unit": "ns/op\t    1059 B/op\t      22 allocs/op",
            "extra": "577410 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - ns/op",
            "value": 2080,
            "unit": "ns/op",
            "extra": "577410 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - B/op",
            "value": 1059,
            "unit": "B/op",
            "extra": "577410 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "577410 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting",
            "value": 1018,
            "unit": "ns/op\t     433 B/op\t       7 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - ns/op",
            "value": 1018,
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
            "value": 136.4,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "8883751 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - ns/op",
            "value": 136.4,
            "unit": "ns/op",
            "extra": "8883751 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "8883751 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8883751 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService",
            "value": 49.91,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "23688618 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - ns/op",
            "value": 49.91,
            "unit": "ns/op",
            "extra": "23688618 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "23688618 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "23688618 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister",
            "value": 117749,
            "unit": "ns/op\t  155660 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - ns/op",
            "value": 117749,
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
            "value": 10.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow - ns/op",
            "value": 10.63,
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
            "value": 11.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - ns/op",
            "value": 11.51,
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
            "value": 23.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52091998 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - ns/op",
            "value": 23.1,
            "unit": "ns/op",
            "extra": "52091998 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52091998 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52091998 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure",
            "value": 24.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48361626 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - ns/op",
            "value": 24.83,
            "unit": "ns/op",
            "extra": "48361626 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48361626 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48361626 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed",
            "value": 23.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50291683 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - ns/op",
            "value": 23.96,
            "unit": "ns/op",
            "extra": "50291683 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50291683 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50291683 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle",
            "value": 653.3,
            "unit": "ns/op\t     208 B/op\t       6 allocs/op",
            "extra": "1841250 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - ns/op",
            "value": 653.3,
            "unit": "ns/op",
            "extra": "1841250 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - B/op",
            "value": 208,
            "unit": "B/op",
            "extra": "1841250 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1841250 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel",
            "value": 143.5,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "8324221 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - ns/op",
            "value": 143.5,
            "unit": "ns/op",
            "extra": "8324221 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "8324221 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8324221 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6893131 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - ns/op",
            "value": 168,
            "unit": "ns/op",
            "extra": "6893131 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6893131 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6893131 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead",
            "value": 393.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3045104 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - ns/op",
            "value": 393.3,
            "unit": "ns/op",
            "extra": "3045104 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "3045104 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3045104 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket",
            "value": 79.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15046672 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - ns/op",
            "value": 79.68,
            "unit": "ns/op",
            "extra": "15046672 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15046672 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15046672 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket",
            "value": 80.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14837586 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - ns/op",
            "value": 80.88,
            "unit": "ns/op",
            "extra": "14837586 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14837586 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14837586 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow",
            "value": 291.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4153770 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - ns/op",
            "value": 291.4,
            "unit": "ns/op",
            "extra": "4153770 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4153770 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4153770 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket",
            "value": 98.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12273919 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - ns/op",
            "value": 98.08,
            "unit": "ns/op",
            "extra": "12273919 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12273919 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12273919 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket",
            "value": 98.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12093356 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - ns/op",
            "value": 98.68,
            "unit": "ns/op",
            "extra": "12093356 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12093356 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12093356 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow",
            "value": 44255,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45096 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - ns/op",
            "value": 44255,
            "unit": "ns/op",
            "extra": "45096 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45096 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45096 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d",
            "value": 79912,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15050 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - ns/op",
            "value": 79912,
            "unit": "ns/op",
            "extra": "15050 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15050 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15050 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d",
            "value": 80334,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14917 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - ns/op",
            "value": 80334,
            "unit": "ns/op",
            "extra": "14917 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14917 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14917 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d",
            "value": 486474,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2468 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - ns/op",
            "value": 486474,
            "unit": "ns/op",
            "extra": "2468 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2468 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2468 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket",
            "value": 7961,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "150738 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - ns/op",
            "value": 7961,
            "unit": "ns/op",
            "extra": "150738 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "150738 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "150738 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket",
            "value": 8031,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149544 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - ns/op",
            "value": 8031,
            "unit": "ns/op",
            "extra": "149544 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "149544 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "149544 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow",
            "value": 28688,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41816 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - ns/op",
            "value": 28688,
            "unit": "ns/op",
            "extra": "41816 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41816 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41816 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow",
            "value": 80.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14826520 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - ns/op",
            "value": 80.94,
            "unit": "ns/op",
            "extra": "14826520 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14826520 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14826520 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN",
            "value": 80.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14877212 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - ns/op",
            "value": 80.7,
            "unit": "ns/op",
            "extra": "14877212 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14877212 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14877212 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak",
            "value": 73.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16199202 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - ns/op",
            "value": 73.67,
            "unit": "ns/op",
            "extra": "16199202 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16199202 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16199202 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware",
            "value": 82.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14618350 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - ns/op",
            "value": 82.12,
            "unit": "ns/op",
            "extra": "14618350 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14618350 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14618350 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel",
            "value": 100.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11936702 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - ns/op",
            "value": 100.7,
            "unit": "ns/op",
            "extra": "11936702 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11936702 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11936702 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_",
            "value": 81.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14774674 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - ns/op",
            "value": 81.25,
            "unit": "ns/op",
            "extra": "14774674 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14774674 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14774674 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d",
            "value": 81.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14826494 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - ns/op",
            "value": 81.02,
            "unit": "ns/op",
            "extra": "14826494 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14826494 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14826494 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_",
            "value": 80.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14824558 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - ns/op",
            "value": 80.9,
            "unit": "ns/op",
            "extra": "14824558 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14824558 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14824558 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d",
            "value": 80.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14810275 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - ns/op",
            "value": 80.99,
            "unit": "ns/op",
            "extra": "14810275 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14810275 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14810275 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow",
            "value": 287.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4172350 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - ns/op",
            "value": 287.9,
            "unit": "ns/op",
            "extra": "4172350 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4172350 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4172350 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN",
            "value": 281.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4257825 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - ns/op",
            "value": 281.9,
            "unit": "ns/op",
            "extra": "4257825 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4257825 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4257825 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup",
            "value": 1685,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "779731 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - ns/op",
            "value": 1685,
            "unit": "ns/op",
            "extra": "779731 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "779731 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "779731 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware",
            "value": 292.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4094835 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - ns/op",
            "value": 292.8,
            "unit": "ns/op",
            "extra": "4094835 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4094835 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4094835 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel",
            "value": 61484,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46621 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - ns/op",
            "value": 61484,
            "unit": "ns/op",
            "extra": "46621 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46621 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46621 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_",
            "value": 68.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17447745 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - ns/op",
            "value": 68.7,
            "unit": "ns/op",
            "extra": "17447745 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17447745 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17447745 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d",
            "value": 108.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13945419 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - ns/op",
            "value": 108.1,
            "unit": "ns/op",
            "extra": "13945419 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13945419 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13945419 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow",
            "value": 80.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14860605 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - ns/op",
            "value": 80.69,
            "unit": "ns/op",
            "extra": "14860605 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14860605 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14860605 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN",
            "value": 80.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14936085 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - ns/op",
            "value": 80.37,
            "unit": "ns/op",
            "extra": "14936085 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14936085 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14936085 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill",
            "value": 71.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16911392 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - ns/op",
            "value": 71.03,
            "unit": "ns/op",
            "extra": "16911392 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16911392 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16911392 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware",
            "value": 81.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14671353 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - ns/op",
            "value": 81.68,
            "unit": "ns/op",
            "extra": "14671353 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14671353 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14671353 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel",
            "value": 98.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12192170 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - ns/op",
            "value": 98.05,
            "unit": "ns/op",
            "extra": "12192170 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12192170 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12192170 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain",
            "value": 82.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14525595 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - ns/op",
            "value": 82.55,
            "unit": "ns/op",
            "extra": "14525595 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14525595 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14525595 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success",
            "value": 4.044,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "296054665 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - ns/op",
            "value": 4.044,
            "unit": "ns/op",
            "extra": "296054665 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "296054665 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "296054665 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess",
            "value": 2292,
            "unit": "ns/op\t     544 B/op\t      10 allocs/op",
            "extra": "523677 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - ns/op",
            "value": 2292,
            "unit": "ns/op",
            "extra": "523677 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - B/op",
            "value": 544,
            "unit": "B/op",
            "extra": "523677 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "523677 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail",
            "value": 2322,
            "unit": "ns/op\t     560 B/op\t      11 allocs/op",
            "extra": "490362 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - ns/op",
            "value": 2322,
            "unit": "ns/op",
            "extra": "490362 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - B/op",
            "value": 560,
            "unit": "B/op",
            "extra": "490362 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "490362 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff",
            "value": 682.7,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "1745052 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - ns/op",
            "value": 682.7,
            "unit": "ns/op",
            "extra": "1745052 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "1745052 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1745052 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware",
            "value": 37.89,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "30068185 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - ns/op",
            "value": 37.89,
            "unit": "ns/op",
            "extra": "30068185 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "30068185 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "30068185 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries",
            "value": 2394,
            "unit": "ns/op\t     600 B/op\t      13 allocs/op",
            "extra": "475527 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - ns/op",
            "value": 2394,
            "unit": "ns/op",
            "extra": "475527 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - B/op",
            "value": 600,
            "unit": "B/op",
            "extra": "475527 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "475527 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain",
            "value": 38.66,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "29918384 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - ns/op",
            "value": 38.66,
            "unit": "ns/op",
            "extra": "29918384 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "29918384 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "29918384 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly",
            "value": 115.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10219347 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - ns/op",
            "value": 115.7,
            "unit": "ns/op",
            "extra": "10219347 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10219347 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10219347 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll",
            "value": 0.3137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll - ns/op",
            "value": 0.3137,
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
            "value": 0.3112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryNone - ns/op",
            "value": 0.3112,
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
            "value": 112.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10453582 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - ns/op",
            "value": 112.7,
            "unit": "ns/op",
            "extra": "10453582 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10453582 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10453582 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry",
            "value": 21.4,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "52353307 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - ns/op",
            "value": 21.4,
            "unit": "ns/op",
            "extra": "52353307 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "52353307 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "52353307 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts",
            "value": 1185,
            "unit": "ns/op\t     288 B/op\t       6 allocs/op",
            "extra": "941083 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - ns/op",
            "value": 1185,
            "unit": "ns/op",
            "extra": "941083 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "941083 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "941083 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts",
            "value": 22177,
            "unit": "ns/op\t    2464 B/op\t      46 allocs/op",
            "extra": "53025 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - ns/op",
            "value": 22177,
            "unit": "ns/op",
            "extra": "53025 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - B/op",
            "value": 2464,
            "unit": "B/op",
            "extra": "53025 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - allocs/op",
            "value": 46,
            "unit": "allocs/op",
            "extra": "53025 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc",
            "value": 1639,
            "unit": "ns/op\t     304 B/op\t      27 allocs/op",
            "extra": "694059 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - ns/op",
            "value": 1639,
            "unit": "ns/op",
            "extra": "694059 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - B/op",
            "value": 304,
            "unit": "B/op",
            "extra": "694059 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "694059 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService",
            "value": 8.369,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "143885258 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - ns/op",
            "value": 8.369,
            "unit": "ns/op",
            "extra": "143885258 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "143885258 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "143885258 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint",
            "value": 99.14,
            "unit": "ns/op\t      85 B/op\t       0 allocs/op",
            "extra": "12037500 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - ns/op",
            "value": 99.14,
            "unit": "ns/op",
            "extra": "12037500 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - B/op",
            "value": 85,
            "unit": "B/op",
            "extra": "12037500 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12037500 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint",
            "value": 80.39,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "14839906 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - ns/op",
            "value": 80.39,
            "unit": "ns/op",
            "extra": "14839906 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "14839906 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "14839906 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware",
            "value": 90.42,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "13451740 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - ns/op",
            "value": 90.42,
            "unit": "ns/op",
            "extra": "13451740 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "13451740 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13451740 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister",
            "value": 2527,
            "unit": "ns/op\t    2648 B/op\t      33 allocs/op",
            "extra": "472204 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - ns/op",
            "value": 2527,
            "unit": "ns/op",
            "extra": "472204 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - B/op",
            "value": 2648,
            "unit": "B/op",
            "extra": "472204 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "472204 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode",
            "value": 243.3,
            "unit": "ns/op\t     128 B/op\t       3 allocs/op",
            "extra": "4948862 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - ns/op",
            "value": 243.3,
            "unit": "ns/op",
            "extra": "4948862 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "4948862 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4948862 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode",
            "value": 799.1,
            "unit": "ns/op\t     992 B/op\t       9 allocs/op",
            "extra": "1510706 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - ns/op",
            "value": 799.1,
            "unit": "ns/op",
            "extra": "1510706 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - B/op",
            "value": 992,
            "unit": "B/op",
            "extra": "1510706 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1510706 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling",
            "value": 105854,
            "unit": "ns/op\t    8819 B/op\t      99 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - ns/op",
            "value": 105854,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - B/op",
            "value": 8819,
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
            "value": 111093,
            "unit": "ns/op\t    9283 B/op\t     107 allocs/op",
            "extra": "9788 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - ns/op",
            "value": 111093,
            "unit": "ns/op",
            "extra": "9788 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - B/op",
            "value": 9283,
            "unit": "B/op",
            "extra": "9788 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "9788 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery",
            "value": 59.23,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "19932358 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - ns/op",
            "value": 59.23,
            "unit": "ns/op",
            "extra": "19932358 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "19932358 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19932358 times\n4 procs"
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
          "id": "b9e99d9c7109926afd8dbd61460c2b2a08a9664a",
          "message": "feat(examples): add the etcd to helloworld",
          "timestamp": "2025-03-03T11:38:45+08:00",
          "tree_id": "ce3b16998dc1b3ef4148fab86d1d5c70e3218d55",
          "url": "https://github.com/HeZephyr/GoMicroKit/commit/b9e99d9c7109926afd8dbd61460c2b2a08a9664a"
        },
        "date": 1740973295095,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogInfo",
            "value": 630.2,
            "unit": "ns/op\t     336 B/op\t       7 allocs/op",
            "extra": "1762368 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - ns/op",
            "value": 630.2,
            "unit": "ns/op",
            "extra": "1762368 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - B/op",
            "value": 336,
            "unit": "B/op",
            "extra": "1762368 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1762368 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField",
            "value": 1059,
            "unit": "ns/op\t     711 B/op\t      13 allocs/op",
            "extra": "992410 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - ns/op",
            "value": 1059,
            "unit": "ns/op",
            "extra": "992410 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - B/op",
            "value": 711,
            "unit": "B/op",
            "extra": "992410 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "992410 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields",
            "value": 2089,
            "unit": "ns/op\t    1060 B/op\t      22 allocs/op",
            "extra": "574237 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - ns/op",
            "value": 2089,
            "unit": "ns/op",
            "extra": "574237 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - B/op",
            "value": 1060,
            "unit": "B/op",
            "extra": "574237 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "574237 times\n4 procs"
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
            "value": 152.9,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "7716182 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - ns/op",
            "value": 152.9,
            "unit": "ns/op",
            "extra": "7716182 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "7716182 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7716182 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService",
            "value": 50.17,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "22835778 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - ns/op",
            "value": 50.17,
            "unit": "ns/op",
            "extra": "22835778 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "22835778 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "22835778 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister",
            "value": 119412,
            "unit": "ns/op\t  155660 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - ns/op",
            "value": 119412,
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
            "value": 10.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - ns/op",
            "value": 10.29,
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
            "value": 23.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51859970 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - ns/op",
            "value": 23.86,
            "unit": "ns/op",
            "extra": "51859970 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51859970 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51859970 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure",
            "value": 24.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48253550 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - ns/op",
            "value": 24.87,
            "unit": "ns/op",
            "extra": "48253550 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48253550 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48253550 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed",
            "value": 23.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50233788 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - ns/op",
            "value": 23.9,
            "unit": "ns/op",
            "extra": "50233788 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50233788 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50233788 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle",
            "value": 656.2,
            "unit": "ns/op\t     208 B/op\t       6 allocs/op",
            "extra": "1840220 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - ns/op",
            "value": 656.2,
            "unit": "ns/op",
            "extra": "1840220 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - B/op",
            "value": 208,
            "unit": "B/op",
            "extra": "1840220 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1840220 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel",
            "value": 147.8,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "8223366 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - ns/op",
            "value": 147.8,
            "unit": "ns/op",
            "extra": "8223366 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "8223366 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8223366 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad",
            "value": 176.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7046019 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - ns/op",
            "value": 176.7,
            "unit": "ns/op",
            "extra": "7046019 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7046019 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7046019 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead",
            "value": 396.9,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3033034 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - ns/op",
            "value": 396.9,
            "unit": "ns/op",
            "extra": "3033034 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "3033034 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3033034 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket",
            "value": 79.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14953485 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - ns/op",
            "value": 79.69,
            "unit": "ns/op",
            "extra": "14953485 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14953485 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14953485 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket",
            "value": 80.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14841842 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - ns/op",
            "value": 80.99,
            "unit": "ns/op",
            "extra": "14841842 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14841842 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14841842 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow",
            "value": 288,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4163106 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - ns/op",
            "value": 288,
            "unit": "ns/op",
            "extra": "4163106 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4163106 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4163106 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket",
            "value": 98.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12217198 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - ns/op",
            "value": 98.01,
            "unit": "ns/op",
            "extra": "12217198 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12217198 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12217198 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket",
            "value": 99.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12119998 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - ns/op",
            "value": 99.14,
            "unit": "ns/op",
            "extra": "12119998 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12119998 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12119998 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow",
            "value": 44287,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45072 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - ns/op",
            "value": 44287,
            "unit": "ns/op",
            "extra": "45072 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45072 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45072 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d",
            "value": 79881,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15003 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - ns/op",
            "value": 79881,
            "unit": "ns/op",
            "extra": "15003 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15003 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15003 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d",
            "value": 80351,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14943 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - ns/op",
            "value": 80351,
            "unit": "ns/op",
            "extra": "14943 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14943 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14943 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d",
            "value": 485049,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2482 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - ns/op",
            "value": 485049,
            "unit": "ns/op",
            "extra": "2482 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2482 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2482 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket",
            "value": 7972,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "150655 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - ns/op",
            "value": 7972,
            "unit": "ns/op",
            "extra": "150655 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "150655 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "150655 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket",
            "value": 8027,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149479 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - ns/op",
            "value": 8027,
            "unit": "ns/op",
            "extra": "149479 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "149479 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "149479 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow",
            "value": 28682,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41737 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - ns/op",
            "value": 28682,
            "unit": "ns/op",
            "extra": "41737 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41737 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41737 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow",
            "value": 80.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14820403 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - ns/op",
            "value": 80.92,
            "unit": "ns/op",
            "extra": "14820403 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14820403 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14820403 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN",
            "value": 80.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14870284 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - ns/op",
            "value": 80.69,
            "unit": "ns/op",
            "extra": "14870284 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14870284 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14870284 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak",
            "value": 73.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16178193 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - ns/op",
            "value": 73.99,
            "unit": "ns/op",
            "extra": "16178193 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16178193 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16178193 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware",
            "value": 82.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14614868 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - ns/op",
            "value": 82.14,
            "unit": "ns/op",
            "extra": "14614868 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14614868 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14614868 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel",
            "value": 100.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11880198 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - ns/op",
            "value": 100.6,
            "unit": "ns/op",
            "extra": "11880198 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11880198 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11880198 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_",
            "value": 81.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14766634 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - ns/op",
            "value": 81.3,
            "unit": "ns/op",
            "extra": "14766634 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14766634 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14766634 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d",
            "value": 81.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14817822 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - ns/op",
            "value": 81.01,
            "unit": "ns/op",
            "extra": "14817822 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14817822 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14817822 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_",
            "value": 80.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14769502 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - ns/op",
            "value": 80.97,
            "unit": "ns/op",
            "extra": "14769502 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14769502 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14769502 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d",
            "value": 81.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14826981 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - ns/op",
            "value": 81.02,
            "unit": "ns/op",
            "extra": "14826981 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14826981 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14826981 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow",
            "value": 288.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4171819 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - ns/op",
            "value": 288.9,
            "unit": "ns/op",
            "extra": "4171819 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4171819 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4171819 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN",
            "value": 282.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4256490 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - ns/op",
            "value": 282.3,
            "unit": "ns/op",
            "extra": "4256490 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4256490 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4256490 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup",
            "value": 1402,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "868383 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - ns/op",
            "value": 1402,
            "unit": "ns/op",
            "extra": "868383 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "868383 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "868383 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware",
            "value": 292.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4103679 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - ns/op",
            "value": 292.7,
            "unit": "ns/op",
            "extra": "4103679 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4103679 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4103679 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel",
            "value": 61633,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45897 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - ns/op",
            "value": 61633,
            "unit": "ns/op",
            "extra": "45897 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45897 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45897 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_",
            "value": 68.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17441812 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - ns/op",
            "value": 68.81,
            "unit": "ns/op",
            "extra": "17441812 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17441812 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17441812 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d",
            "value": 86.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13932319 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - ns/op",
            "value": 86.32,
            "unit": "ns/op",
            "extra": "13932319 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13932319 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13932319 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow",
            "value": 80.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14865980 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - ns/op",
            "value": 80.72,
            "unit": "ns/op",
            "extra": "14865980 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14865980 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14865980 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN",
            "value": 80.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14939725 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - ns/op",
            "value": 80.31,
            "unit": "ns/op",
            "extra": "14939725 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14939725 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14939725 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill",
            "value": 71.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16880362 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - ns/op",
            "value": 71.12,
            "unit": "ns/op",
            "extra": "16880362 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16880362 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16880362 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware",
            "value": 81.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14658310 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - ns/op",
            "value": 81.81,
            "unit": "ns/op",
            "extra": "14658310 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14658310 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14658310 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel",
            "value": 98.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12281892 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - ns/op",
            "value": 98.52,
            "unit": "ns/op",
            "extra": "12281892 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12281892 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12281892 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain",
            "value": 82.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14552478 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - ns/op",
            "value": 82.53,
            "unit": "ns/op",
            "extra": "14552478 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14552478 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14552478 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success",
            "value": 4.071,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "296720839 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - ns/op",
            "value": 4.071,
            "unit": "ns/op",
            "extra": "296720839 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "296720839 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "296720839 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess",
            "value": 2270,
            "unit": "ns/op\t     544 B/op\t      10 allocs/op",
            "extra": "525364 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - ns/op",
            "value": 2270,
            "unit": "ns/op",
            "extra": "525364 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - B/op",
            "value": 544,
            "unit": "B/op",
            "extra": "525364 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "525364 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail",
            "value": 2316,
            "unit": "ns/op\t     560 B/op\t      11 allocs/op",
            "extra": "485216 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - ns/op",
            "value": 2316,
            "unit": "ns/op",
            "extra": "485216 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - B/op",
            "value": 560,
            "unit": "B/op",
            "extra": "485216 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "485216 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff",
            "value": 680.7,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "1774755 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - ns/op",
            "value": 680.7,
            "unit": "ns/op",
            "extra": "1774755 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "1774755 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1774755 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware",
            "value": 37.95,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "30542871 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - ns/op",
            "value": 37.95,
            "unit": "ns/op",
            "extra": "30542871 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "30542871 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "30542871 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries",
            "value": 2398,
            "unit": "ns/op\t     600 B/op\t      13 allocs/op",
            "extra": "472897 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - ns/op",
            "value": 2398,
            "unit": "ns/op",
            "extra": "472897 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - B/op",
            "value": 600,
            "unit": "B/op",
            "extra": "472897 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "472897 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain",
            "value": 39,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "30159786 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - ns/op",
            "value": 39,
            "unit": "ns/op",
            "extra": "30159786 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "30159786 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "30159786 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly",
            "value": 115.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "9763398 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - ns/op",
            "value": 115.8,
            "unit": "ns/op",
            "extra": "9763398 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "9763398 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9763398 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll",
            "value": 0.3118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll - ns/op",
            "value": 0.3118,
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
            "value": 0.3115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryNone - ns/op",
            "value": 0.3115,
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
            "value": 112.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10546174 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - ns/op",
            "value": 112.6,
            "unit": "ns/op",
            "extra": "10546174 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10546174 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10546174 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry",
            "value": 21.32,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51793341 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - ns/op",
            "value": 21.32,
            "unit": "ns/op",
            "extra": "51793341 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "51793341 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "51793341 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts",
            "value": 1186,
            "unit": "ns/op\t     288 B/op\t       6 allocs/op",
            "extra": "943736 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - ns/op",
            "value": 1186,
            "unit": "ns/op",
            "extra": "943736 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "943736 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "943736 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts",
            "value": 22777,
            "unit": "ns/op\t    2464 B/op\t      46 allocs/op",
            "extra": "54778 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - ns/op",
            "value": 22777,
            "unit": "ns/op",
            "extra": "54778 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - B/op",
            "value": 2464,
            "unit": "B/op",
            "extra": "54778 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - allocs/op",
            "value": 46,
            "unit": "allocs/op",
            "extra": "54778 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc",
            "value": 1643,
            "unit": "ns/op\t     304 B/op\t      27 allocs/op",
            "extra": "690972 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - ns/op",
            "value": 1643,
            "unit": "ns/op",
            "extra": "690972 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - B/op",
            "value": 304,
            "unit": "B/op",
            "extra": "690972 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "690972 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService",
            "value": 8.269,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "144012308 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - ns/op",
            "value": 8.269,
            "unit": "ns/op",
            "extra": "144012308 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "144012308 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "144012308 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint",
            "value": 87.41,
            "unit": "ns/op\t      89 B/op\t       0 allocs/op",
            "extra": "14498062 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - ns/op",
            "value": 87.41,
            "unit": "ns/op",
            "extra": "14498062 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - B/op",
            "value": 89,
            "unit": "B/op",
            "extra": "14498062 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14498062 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint",
            "value": 80.33,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "14593536 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - ns/op",
            "value": 80.33,
            "unit": "ns/op",
            "extra": "14593536 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "14593536 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "14593536 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware",
            "value": 88.5,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "13267557 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - ns/op",
            "value": 88.5,
            "unit": "ns/op",
            "extra": "13267557 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "13267557 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13267557 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister",
            "value": 2540,
            "unit": "ns/op\t    2648 B/op\t      33 allocs/op",
            "extra": "467134 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - ns/op",
            "value": 2540,
            "unit": "ns/op",
            "extra": "467134 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - B/op",
            "value": 2648,
            "unit": "B/op",
            "extra": "467134 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "467134 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode",
            "value": 247.2,
            "unit": "ns/op\t     128 B/op\t       3 allocs/op",
            "extra": "4919456 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - ns/op",
            "value": 247.2,
            "unit": "ns/op",
            "extra": "4919456 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "4919456 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4919456 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode",
            "value": 797.9,
            "unit": "ns/op\t     992 B/op\t       9 allocs/op",
            "extra": "1507194 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - ns/op",
            "value": 797.9,
            "unit": "ns/op",
            "extra": "1507194 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - B/op",
            "value": 992,
            "unit": "B/op",
            "extra": "1507194 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1507194 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling",
            "value": 108488,
            "unit": "ns/op\t    8819 B/op\t      99 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - ns/op",
            "value": 108488,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - B/op",
            "value": 8819,
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
            "value": 114046,
            "unit": "ns/op\t    9291 B/op\t     107 allocs/op",
            "extra": "10452 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - ns/op",
            "value": 114046,
            "unit": "ns/op",
            "extra": "10452 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - B/op",
            "value": 9291,
            "unit": "B/op",
            "extra": "10452 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "10452 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery",
            "value": 59.36,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "19738591 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - ns/op",
            "value": 59.36,
            "unit": "ns/op",
            "extra": "19738591 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "19738591 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19738591 times\n4 procs"
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
          "id": "2ff9ad4b485dec7836a59bad3d2ad74328bb7bb2",
          "message": "chore(examples): fix integer to string conversion in stream response",
          "timestamp": "2025-03-03T11:43:15+08:00",
          "tree_id": "cc6c3882ed2b71dd14ee842ab0548287c097681d",
          "url": "https://github.com/HeZephyr/GoMicroKit/commit/2ff9ad4b485dec7836a59bad3d2ad74328bb7bb2"
        },
        "date": 1740973568771,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogInfo",
            "value": 615.1,
            "unit": "ns/op\t     323 B/op\t       7 allocs/op",
            "extra": "1923915 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - ns/op",
            "value": 615.1,
            "unit": "ns/op",
            "extra": "1923915 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - B/op",
            "value": 323,
            "unit": "B/op",
            "extra": "1923915 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1923915 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField",
            "value": 1041,
            "unit": "ns/op\t     691 B/op\t      13 allocs/op",
            "extra": "1159680 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - ns/op",
            "value": 1041,
            "unit": "ns/op",
            "extra": "1159680 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - B/op",
            "value": 691,
            "unit": "B/op",
            "extra": "1159680 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1159680 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields",
            "value": 2038,
            "unit": "ns/op\t    1054 B/op\t      22 allocs/op",
            "extra": "589018 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - ns/op",
            "value": 2038,
            "unit": "ns/op",
            "extra": "589018 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - B/op",
            "value": 1054,
            "unit": "B/op",
            "extra": "589018 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "589018 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting",
            "value": 1084,
            "unit": "ns/op\t     433 B/op\t       7 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - ns/op",
            "value": 1084,
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
            "value": 144.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "7880629 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - ns/op",
            "value": 144.1,
            "unit": "ns/op",
            "extra": "7880629 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "7880629 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7880629 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService",
            "value": 49.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "23453264 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - ns/op",
            "value": 49.6,
            "unit": "ns/op",
            "extra": "23453264 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "23453264 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "23453264 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister",
            "value": 114104,
            "unit": "ns/op\t  155660 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - ns/op",
            "value": 114104,
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
            "value": 10.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Allow - ns/op",
            "value": 10.29,
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
            "value": 10.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - ns/op",
            "value": 10.12,
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
            "value": 11.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - ns/op",
            "value": 11.23,
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
            "value": 22.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52050320 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - ns/op",
            "value": 22.46,
            "unit": "ns/op",
            "extra": "52050320 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52050320 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52050320 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure",
            "value": 24.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48538465 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - ns/op",
            "value": 24.5,
            "unit": "ns/op",
            "extra": "48538465 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48538465 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48538465 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed",
            "value": 23.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50349884 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - ns/op",
            "value": 23.48,
            "unit": "ns/op",
            "extra": "50349884 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50349884 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50349884 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle",
            "value": 648.7,
            "unit": "ns/op\t     208 B/op\t       6 allocs/op",
            "extra": "1874728 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - ns/op",
            "value": 648.7,
            "unit": "ns/op",
            "extra": "1874728 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - B/op",
            "value": 208,
            "unit": "B/op",
            "extra": "1874728 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1874728 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel",
            "value": 140.3,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "8337626 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - ns/op",
            "value": 140.3,
            "unit": "ns/op",
            "extra": "8337626 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "8337626 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8337626 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad",
            "value": 166.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7235958 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - ns/op",
            "value": 166.9,
            "unit": "ns/op",
            "extra": "7235958 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7235958 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7235958 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead",
            "value": 389.4,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3058743 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - ns/op",
            "value": 389.4,
            "unit": "ns/op",
            "extra": "3058743 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "3058743 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3058743 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket",
            "value": 78.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15417310 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - ns/op",
            "value": 78.04,
            "unit": "ns/op",
            "extra": "15417310 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15417310 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15417310 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket",
            "value": 77.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15536282 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - ns/op",
            "value": 77.96,
            "unit": "ns/op",
            "extra": "15536282 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15536282 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15536282 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow",
            "value": 284.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4179762 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - ns/op",
            "value": 284.3,
            "unit": "ns/op",
            "extra": "4179762 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4179762 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4179762 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket",
            "value": 95.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12706182 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - ns/op",
            "value": 95.41,
            "unit": "ns/op",
            "extra": "12706182 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12706182 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12706182 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket",
            "value": 96.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12979294 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - ns/op",
            "value": 96.62,
            "unit": "ns/op",
            "extra": "12979294 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12979294 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12979294 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow",
            "value": 42924,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44775 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - ns/op",
            "value": 42924,
            "unit": "ns/op",
            "extra": "44775 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44775 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44775 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d",
            "value": 78296,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15458 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - ns/op",
            "value": 78296,
            "unit": "ns/op",
            "extra": "15458 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15458 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15458 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d",
            "value": 78898,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15331 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - ns/op",
            "value": 78898,
            "unit": "ns/op",
            "extra": "15331 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15331 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15331 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d",
            "value": 474558,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2571 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - ns/op",
            "value": 474558,
            "unit": "ns/op",
            "extra": "2571 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2571 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2571 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket",
            "value": 7963,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "150457 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - ns/op",
            "value": 7963,
            "unit": "ns/op",
            "extra": "150457 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "150457 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "150457 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket",
            "value": 7885,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "150918 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - ns/op",
            "value": 7885,
            "unit": "ns/op",
            "extra": "150918 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "150918 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "150918 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow",
            "value": 28648,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41978 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - ns/op",
            "value": 28648,
            "unit": "ns/op",
            "extra": "41978 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41978 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41978 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow",
            "value": 80.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14832019 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - ns/op",
            "value": 80.86,
            "unit": "ns/op",
            "extra": "14832019 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14832019 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14832019 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN",
            "value": 79.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14885522 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - ns/op",
            "value": 79.82,
            "unit": "ns/op",
            "extra": "14885522 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14885522 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14885522 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak",
            "value": 72.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16231495 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - ns/op",
            "value": 72.44,
            "unit": "ns/op",
            "extra": "16231495 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16231495 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16231495 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware",
            "value": 81.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14787882 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - ns/op",
            "value": 81.17,
            "unit": "ns/op",
            "extra": "14787882 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14787882 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14787882 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel",
            "value": 99.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12161044 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - ns/op",
            "value": 99.01,
            "unit": "ns/op",
            "extra": "12161044 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12161044 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12161044 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_",
            "value": 80.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14760262 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - ns/op",
            "value": 80.92,
            "unit": "ns/op",
            "extra": "14760262 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14760262 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14760262 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d",
            "value": 80.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14830990 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - ns/op",
            "value": 80.2,
            "unit": "ns/op",
            "extra": "14830990 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14830990 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14830990 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_",
            "value": 80.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14823048 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - ns/op",
            "value": 80.24,
            "unit": "ns/op",
            "extra": "14823048 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14823048 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14823048 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d",
            "value": 80.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14932762 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - ns/op",
            "value": 80.39,
            "unit": "ns/op",
            "extra": "14932762 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14932762 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14932762 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow",
            "value": 281.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4146104 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - ns/op",
            "value": 281.8,
            "unit": "ns/op",
            "extra": "4146104 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4146104 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4146104 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN",
            "value": 282.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4382005 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - ns/op",
            "value": 282.5,
            "unit": "ns/op",
            "extra": "4382005 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4382005 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4382005 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup",
            "value": 1440,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "822932 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - ns/op",
            "value": 1440,
            "unit": "ns/op",
            "extra": "822932 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "822932 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "822932 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware",
            "value": 287.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4252623 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - ns/op",
            "value": 287.5,
            "unit": "ns/op",
            "extra": "4252623 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4252623 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4252623 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel",
            "value": 61333,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45889 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - ns/op",
            "value": 61333,
            "unit": "ns/op",
            "extra": "45889 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45889 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45889 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_",
            "value": 68.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17619307 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - ns/op",
            "value": 68.91,
            "unit": "ns/op",
            "extra": "17619307 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17619307 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17619307 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d",
            "value": 85.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13777762 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - ns/op",
            "value": 85.56,
            "unit": "ns/op",
            "extra": "13777762 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13777762 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13777762 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow",
            "value": 79.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15401702 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - ns/op",
            "value": 79.51,
            "unit": "ns/op",
            "extra": "15401702 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15401702 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15401702 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN",
            "value": 77.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15050407 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - ns/op",
            "value": 77.65,
            "unit": "ns/op",
            "extra": "15050407 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15050407 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15050407 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill",
            "value": 69.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16931349 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - ns/op",
            "value": 69.49,
            "unit": "ns/op",
            "extra": "16931349 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16931349 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16931349 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware",
            "value": 79.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14652729 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - ns/op",
            "value": 79.84,
            "unit": "ns/op",
            "extra": "14652729 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14652729 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14652729 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel",
            "value": 97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12227142 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - ns/op",
            "value": 97,
            "unit": "ns/op",
            "extra": "12227142 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12227142 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12227142 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain",
            "value": 78.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14601348 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - ns/op",
            "value": 78.99,
            "unit": "ns/op",
            "extra": "14601348 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14601348 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14601348 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success",
            "value": 4.037,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298818694 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - ns/op",
            "value": 4.037,
            "unit": "ns/op",
            "extra": "298818694 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "298818694 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "298818694 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess",
            "value": 2224,
            "unit": "ns/op\t     544 B/op\t      10 allocs/op",
            "extra": "492644 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - ns/op",
            "value": 2224,
            "unit": "ns/op",
            "extra": "492644 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - B/op",
            "value": 544,
            "unit": "B/op",
            "extra": "492644 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "492644 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail",
            "value": 2286,
            "unit": "ns/op\t     560 B/op\t      11 allocs/op",
            "extra": "509520 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - ns/op",
            "value": 2286,
            "unit": "ns/op",
            "extra": "509520 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - B/op",
            "value": 560,
            "unit": "B/op",
            "extra": "509520 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "509520 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff",
            "value": 679.2,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "1808916 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - ns/op",
            "value": 679.2,
            "unit": "ns/op",
            "extra": "1808916 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "1808916 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1808916 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware",
            "value": 37.43,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "30736881 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - ns/op",
            "value": 37.43,
            "unit": "ns/op",
            "extra": "30736881 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "30736881 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "30736881 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries",
            "value": 2373,
            "unit": "ns/op\t     600 B/op\t      13 allocs/op",
            "extra": "476211 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - ns/op",
            "value": 2373,
            "unit": "ns/op",
            "extra": "476211 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - B/op",
            "value": 600,
            "unit": "B/op",
            "extra": "476211 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "476211 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain",
            "value": 38.29,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "30178203 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - ns/op",
            "value": 38.29,
            "unit": "ns/op",
            "extra": "30178203 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "30178203 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "30178203 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly",
            "value": 114.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10166822 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - ns/op",
            "value": 114.7,
            "unit": "ns/op",
            "extra": "10166822 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10166822 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10166822 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll",
            "value": 0.3025,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll - ns/op",
            "value": 0.3025,
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
            "value": 0.3131,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryNone - ns/op",
            "value": 0.3131,
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
            "value": 110.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10532700 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - ns/op",
            "value": 110.2,
            "unit": "ns/op",
            "extra": "10532700 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10532700 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10532700 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry",
            "value": 21,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "52721408 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - ns/op",
            "value": 21,
            "unit": "ns/op",
            "extra": "52721408 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "52721408 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "52721408 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts",
            "value": 1143,
            "unit": "ns/op\t     288 B/op\t       6 allocs/op",
            "extra": "956259 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - ns/op",
            "value": 1143,
            "unit": "ns/op",
            "extra": "956259 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "956259 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "956259 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts",
            "value": 21907,
            "unit": "ns/op\t    2464 B/op\t      46 allocs/op",
            "extra": "61124 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - ns/op",
            "value": 21907,
            "unit": "ns/op",
            "extra": "61124 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - B/op",
            "value": 2464,
            "unit": "B/op",
            "extra": "61124 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - allocs/op",
            "value": 46,
            "unit": "allocs/op",
            "extra": "61124 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc",
            "value": 1631,
            "unit": "ns/op\t     304 B/op\t      27 allocs/op",
            "extra": "710347 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - ns/op",
            "value": 1631,
            "unit": "ns/op",
            "extra": "710347 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - B/op",
            "value": 304,
            "unit": "B/op",
            "extra": "710347 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "710347 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService",
            "value": 8.293,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "147421501 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - ns/op",
            "value": 8.293,
            "unit": "ns/op",
            "extra": "147421501 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "147421501 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "147421501 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint",
            "value": 90.4,
            "unit": "ns/op\t      94 B/op\t       0 allocs/op",
            "extra": "13749460 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - ns/op",
            "value": 90.4,
            "unit": "ns/op",
            "extra": "13749460 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - B/op",
            "value": 94,
            "unit": "B/op",
            "extra": "13749460 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13749460 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint",
            "value": 83.34,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "13960753 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - ns/op",
            "value": 83.34,
            "unit": "ns/op",
            "extra": "13960753 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "13960753 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "13960753 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware",
            "value": 88.87,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "13348711 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - ns/op",
            "value": 88.87,
            "unit": "ns/op",
            "extra": "13348711 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "13348711 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13348711 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister",
            "value": 2594,
            "unit": "ns/op\t    2648 B/op\t      33 allocs/op",
            "extra": "453415 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - ns/op",
            "value": 2594,
            "unit": "ns/op",
            "extra": "453415 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - B/op",
            "value": 2648,
            "unit": "B/op",
            "extra": "453415 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "453415 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode",
            "value": 242.8,
            "unit": "ns/op\t     128 B/op\t       3 allocs/op",
            "extra": "4974242 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - ns/op",
            "value": 242.8,
            "unit": "ns/op",
            "extra": "4974242 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "4974242 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4974242 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode",
            "value": 779.1,
            "unit": "ns/op\t     992 B/op\t       9 allocs/op",
            "extra": "1504160 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - ns/op",
            "value": 779.1,
            "unit": "ns/op",
            "extra": "1504160 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - B/op",
            "value": 992,
            "unit": "B/op",
            "extra": "1504160 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1504160 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling",
            "value": 101338,
            "unit": "ns/op\t    8810 B/op\t      99 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - ns/op",
            "value": 101338,
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
            "value": 108339,
            "unit": "ns/op\t    9268 B/op\t     107 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - ns/op",
            "value": 108339,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - B/op",
            "value": 9268,
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
            "value": 58.98,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "19579112 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - ns/op",
            "value": 58.98,
            "unit": "ns/op",
            "extra": "19579112 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "19579112 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19579112 times\n4 procs"
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
          "id": "173644010bfea140cf32bfa6da71a0487fb605c0",
          "message": "fix(transport): replace deprecated grpc.Dial method with grpc.NewClient",
          "timestamp": "2025-03-03T11:48:29+08:00",
          "tree_id": "b23027b4f63355c102a76cec5e37c1e2b8b58d60",
          "url": "https://github.com/HeZephyr/GoMicroKit/commit/173644010bfea140cf32bfa6da71a0487fb605c0"
        },
        "date": 1740973880144,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogInfo",
            "value": 658.5,
            "unit": "ns/op\t     326 B/op\t       7 allocs/op",
            "extra": "1888792 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - ns/op",
            "value": 658.5,
            "unit": "ns/op",
            "extra": "1888792 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - B/op",
            "value": 326,
            "unit": "B/op",
            "extra": "1888792 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1888792 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField",
            "value": 1074,
            "unit": "ns/op\t     709 B/op\t      13 allocs/op",
            "extra": "1005680 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - ns/op",
            "value": 1074,
            "unit": "ns/op",
            "extra": "1005680 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - B/op",
            "value": 709,
            "unit": "B/op",
            "extra": "1005680 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1005680 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields",
            "value": 2079,
            "unit": "ns/op\t    1082 B/op\t      22 allocs/op",
            "extra": "525810 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - ns/op",
            "value": 2079,
            "unit": "ns/op",
            "extra": "525810 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - B/op",
            "value": 1082,
            "unit": "B/op",
            "extra": "525810 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "525810 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting",
            "value": 1007,
            "unit": "ns/op\t     433 B/op\t       7 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - ns/op",
            "value": 1007,
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
            "value": 136.8,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "8666390 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - ns/op",
            "value": 136.8,
            "unit": "ns/op",
            "extra": "8666390 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "8666390 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8666390 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService",
            "value": 52.11,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "22675540 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - ns/op",
            "value": 52.11,
            "unit": "ns/op",
            "extra": "22675540 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "22675540 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "22675540 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister",
            "value": 117785,
            "unit": "ns/op\t  155660 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - ns/op",
            "value": 117785,
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
            "value": 10.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - ns/op",
            "value": 10.34,
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
            "value": 11.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Failure - ns/op",
            "value": 11.48,
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
            "value": 23.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52004679 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - ns/op",
            "value": 23.1,
            "unit": "ns/op",
            "extra": "52004679 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52004679 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52004679 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure",
            "value": 24.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48234765 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - ns/op",
            "value": 24.9,
            "unit": "ns/op",
            "extra": "48234765 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48234765 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48234765 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed",
            "value": 24.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50210341 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - ns/op",
            "value": 24.03,
            "unit": "ns/op",
            "extra": "50210341 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50210341 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50210341 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle",
            "value": 660.1,
            "unit": "ns/op\t     208 B/op\t       6 allocs/op",
            "extra": "1833692 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - ns/op",
            "value": 660.1,
            "unit": "ns/op",
            "extra": "1833692 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - B/op",
            "value": 208,
            "unit": "B/op",
            "extra": "1833692 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1833692 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel",
            "value": 144.9,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "8214306 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - ns/op",
            "value": 144.9,
            "unit": "ns/op",
            "extra": "8214306 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "8214306 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8214306 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7110519 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - ns/op",
            "value": 168,
            "unit": "ns/op",
            "extra": "7110519 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7110519 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7110519 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead",
            "value": 395.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3016582 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - ns/op",
            "value": 395.3,
            "unit": "ns/op",
            "extra": "3016582 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "3016582 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3016582 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket",
            "value": 79.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14997272 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - ns/op",
            "value": 79.75,
            "unit": "ns/op",
            "extra": "14997272 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14997272 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14997272 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket",
            "value": 80.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14844399 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - ns/op",
            "value": 80.8,
            "unit": "ns/op",
            "extra": "14844399 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14844399 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14844399 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow",
            "value": 288.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4170217 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - ns/op",
            "value": 288.2,
            "unit": "ns/op",
            "extra": "4170217 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4170217 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4170217 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket",
            "value": 98.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12302145 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - ns/op",
            "value": 98.82,
            "unit": "ns/op",
            "extra": "12302145 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12302145 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12302145 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket",
            "value": 99.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12193030 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - ns/op",
            "value": 99.34,
            "unit": "ns/op",
            "extra": "12193030 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12193030 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12193030 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow",
            "value": 43440,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47511 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - ns/op",
            "value": 43440,
            "unit": "ns/op",
            "extra": "47511 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47511 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47511 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d",
            "value": 80107,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15039 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - ns/op",
            "value": 80107,
            "unit": "ns/op",
            "extra": "15039 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15039 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15039 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d",
            "value": 80289,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14936 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - ns/op",
            "value": 80289,
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
            "value": 490402,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2467 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - ns/op",
            "value": 490402,
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
            "value": 7972,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "150294 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - ns/op",
            "value": 7972,
            "unit": "ns/op",
            "extra": "150294 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "150294 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "150294 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket",
            "value": 8032,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149533 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - ns/op",
            "value": 8032,
            "unit": "ns/op",
            "extra": "149533 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "149533 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "149533 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow",
            "value": 28671,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41631 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - ns/op",
            "value": 28671,
            "unit": "ns/op",
            "extra": "41631 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41631 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41631 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow",
            "value": 80.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14832487 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - ns/op",
            "value": 80.87,
            "unit": "ns/op",
            "extra": "14832487 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14832487 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14832487 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN",
            "value": 80.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14893754 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - ns/op",
            "value": 80.7,
            "unit": "ns/op",
            "extra": "14893754 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14893754 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14893754 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak",
            "value": 73.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16289978 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - ns/op",
            "value": 73.09,
            "unit": "ns/op",
            "extra": "16289978 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16289978 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16289978 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware",
            "value": 83.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14560605 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - ns/op",
            "value": 83.02,
            "unit": "ns/op",
            "extra": "14560605 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14560605 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14560605 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel",
            "value": 101.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11957344 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - ns/op",
            "value": 101.1,
            "unit": "ns/op",
            "extra": "11957344 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11957344 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11957344 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_",
            "value": 81.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14768974 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - ns/op",
            "value": 81.25,
            "unit": "ns/op",
            "extra": "14768974 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14768974 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14768974 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d",
            "value": 81.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14815848 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - ns/op",
            "value": 81.17,
            "unit": "ns/op",
            "extra": "14815848 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14815848 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14815848 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_",
            "value": 81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14817986 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - ns/op",
            "value": 81,
            "unit": "ns/op",
            "extra": "14817986 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14817986 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14817986 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d",
            "value": 80.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14785760 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - ns/op",
            "value": 80.92,
            "unit": "ns/op",
            "extra": "14785760 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14785760 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14785760 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow",
            "value": 288.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4152984 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - ns/op",
            "value": 288.8,
            "unit": "ns/op",
            "extra": "4152984 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4152984 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4152984 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN",
            "value": 281.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4256694 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - ns/op",
            "value": 281.9,
            "unit": "ns/op",
            "extra": "4256694 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4256694 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4256694 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup",
            "value": 1400,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "870250 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - ns/op",
            "value": 1400,
            "unit": "ns/op",
            "extra": "870250 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "870250 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "870250 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware",
            "value": 293,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4100847 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - ns/op",
            "value": 293,
            "unit": "ns/op",
            "extra": "4100847 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4100847 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4100847 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel",
            "value": 62230,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44499 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - ns/op",
            "value": 62230,
            "unit": "ns/op",
            "extra": "44499 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44499 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44499 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_",
            "value": 68.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17473138 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - ns/op",
            "value": 68.71,
            "unit": "ns/op",
            "extra": "17473138 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17473138 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17473138 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d",
            "value": 86.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13595280 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - ns/op",
            "value": 86.03,
            "unit": "ns/op",
            "extra": "13595280 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13595280 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13595280 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow",
            "value": 80.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14856070 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - ns/op",
            "value": 80.76,
            "unit": "ns/op",
            "extra": "14856070 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14856070 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14856070 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN",
            "value": 80.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14943625 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - ns/op",
            "value": 80.24,
            "unit": "ns/op",
            "extra": "14943625 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14943625 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14943625 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill",
            "value": 71.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16907242 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - ns/op",
            "value": 71.16,
            "unit": "ns/op",
            "extra": "16907242 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16907242 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16907242 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware",
            "value": 81.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14678326 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - ns/op",
            "value": 81.72,
            "unit": "ns/op",
            "extra": "14678326 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14678326 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14678326 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel",
            "value": 97.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12120888 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - ns/op",
            "value": 97.92,
            "unit": "ns/op",
            "extra": "12120888 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12120888 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12120888 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain",
            "value": 82.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14544954 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - ns/op",
            "value": 82.53,
            "unit": "ns/op",
            "extra": "14544954 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14544954 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14544954 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success",
            "value": 4.053,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "296213886 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - ns/op",
            "value": 4.053,
            "unit": "ns/op",
            "extra": "296213886 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "296213886 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "296213886 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess",
            "value": 2317,
            "unit": "ns/op\t     544 B/op\t      10 allocs/op",
            "extra": "524334 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - ns/op",
            "value": 2317,
            "unit": "ns/op",
            "extra": "524334 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - B/op",
            "value": 544,
            "unit": "B/op",
            "extra": "524334 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "524334 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail",
            "value": 2324,
            "unit": "ns/op\t     560 B/op\t      11 allocs/op",
            "extra": "469784 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - ns/op",
            "value": 2324,
            "unit": "ns/op",
            "extra": "469784 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - B/op",
            "value": 560,
            "unit": "B/op",
            "extra": "469784 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "469784 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff",
            "value": 682,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "1767614 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - ns/op",
            "value": 682,
            "unit": "ns/op",
            "extra": "1767614 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "1767614 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1767614 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware",
            "value": 39.25,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "30086548 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - ns/op",
            "value": 39.25,
            "unit": "ns/op",
            "extra": "30086548 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "30086548 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "30086548 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries",
            "value": 2382,
            "unit": "ns/op\t     600 B/op\t      13 allocs/op",
            "extra": "474952 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - ns/op",
            "value": 2382,
            "unit": "ns/op",
            "extra": "474952 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - B/op",
            "value": 600,
            "unit": "B/op",
            "extra": "474952 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "474952 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain",
            "value": 39.58,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "29233454 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - ns/op",
            "value": 39.58,
            "unit": "ns/op",
            "extra": "29233454 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "29233454 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "29233454 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly",
            "value": 116.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10247722 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - ns/op",
            "value": 116.7,
            "unit": "ns/op",
            "extra": "10247722 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10247722 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10247722 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll",
            "value": 0.3117,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryAll - ns/op",
            "value": 0.3117,
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
            "value": 0.312,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryNone - ns/op",
            "value": 0.312,
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
            "value": 113.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10502829 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - ns/op",
            "value": 113.6,
            "unit": "ns/op",
            "extra": "10502829 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10502829 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10502829 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry",
            "value": 21.61,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51669885 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - ns/op",
            "value": 21.61,
            "unit": "ns/op",
            "extra": "51669885 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "51669885 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "51669885 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts",
            "value": 1184,
            "unit": "ns/op\t     288 B/op\t       6 allocs/op",
            "extra": "941950 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - ns/op",
            "value": 1184,
            "unit": "ns/op",
            "extra": "941950 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "941950 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "941950 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts",
            "value": 22604,
            "unit": "ns/op\t    2464 B/op\t      46 allocs/op",
            "extra": "56166 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - ns/op",
            "value": 22604,
            "unit": "ns/op",
            "extra": "56166 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - B/op",
            "value": 2464,
            "unit": "B/op",
            "extra": "56166 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - allocs/op",
            "value": 46,
            "unit": "allocs/op",
            "extra": "56166 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc",
            "value": 1640,
            "unit": "ns/op\t     304 B/op\t      27 allocs/op",
            "extra": "694917 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - ns/op",
            "value": 1640,
            "unit": "ns/op",
            "extra": "694917 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - B/op",
            "value": 304,
            "unit": "B/op",
            "extra": "694917 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "694917 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService",
            "value": 8.305,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "144817819 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - ns/op",
            "value": 8.305,
            "unit": "ns/op",
            "extra": "144817819 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "144817819 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "144817819 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint",
            "value": 86.39,
            "unit": "ns/op\t      88 B/op\t       0 allocs/op",
            "extra": "14644754 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - ns/op",
            "value": 86.39,
            "unit": "ns/op",
            "extra": "14644754 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - B/op",
            "value": 88,
            "unit": "B/op",
            "extra": "14644754 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14644754 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint",
            "value": 82.51,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "14557467 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - ns/op",
            "value": 82.51,
            "unit": "ns/op",
            "extra": "14557467 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "14557467 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "14557467 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware",
            "value": 88.52,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "13435927 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - ns/op",
            "value": 88.52,
            "unit": "ns/op",
            "extra": "13435927 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "13435927 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13435927 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister",
            "value": 2597,
            "unit": "ns/op\t    2648 B/op\t      33 allocs/op",
            "extra": "468398 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - ns/op",
            "value": 2597,
            "unit": "ns/op",
            "extra": "468398 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - B/op",
            "value": 2648,
            "unit": "B/op",
            "extra": "468398 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "468398 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode",
            "value": 244.4,
            "unit": "ns/op\t     128 B/op\t       3 allocs/op",
            "extra": "4906530 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - ns/op",
            "value": 244.4,
            "unit": "ns/op",
            "extra": "4906530 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "4906530 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4906530 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode",
            "value": 798.2,
            "unit": "ns/op\t     992 B/op\t       9 allocs/op",
            "extra": "1505106 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - ns/op",
            "value": 798.2,
            "unit": "ns/op",
            "extra": "1505106 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - B/op",
            "value": 992,
            "unit": "B/op",
            "extra": "1505106 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1505106 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling",
            "value": 108322,
            "unit": "ns/op\t    8819 B/op\t      99 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - ns/op",
            "value": 108322,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - B/op",
            "value": 8819,
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
            "value": 115474,
            "unit": "ns/op\t    9265 B/op\t     107 allocs/op",
            "extra": "9064 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - ns/op",
            "value": 115474,
            "unit": "ns/op",
            "extra": "9064 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - B/op",
            "value": 9265,
            "unit": "B/op",
            "extra": "9064 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "9064 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery",
            "value": 60.08,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "19743970 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - ns/op",
            "value": 60.08,
            "unit": "ns/op",
            "extra": "19743970 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "19743970 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19743970 times\n4 procs"
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
          "id": "18a472fda9e6b30f31de4f0c27d398267429b327",
          "message": "docs: update the README.md and add the docker-compose.yml",
          "timestamp": "2025-03-03T16:51:54+08:00",
          "tree_id": "81bbc9c74b154de3b7d70add9b476566016f4281",
          "url": "https://github.com/HeZephyr/GoMicroKit/commit/18a472fda9e6b30f31de4f0c27d398267429b327"
        },
        "date": 1740992264053,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogInfo",
            "value": 625.2,
            "unit": "ns/op\t     325 B/op\t       7 allocs/op",
            "extra": "1901823 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - ns/op",
            "value": 625.2,
            "unit": "ns/op",
            "extra": "1901823 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - B/op",
            "value": 325,
            "unit": "B/op",
            "extra": "1901823 times\n4 procs"
          },
          {
            "name": "BenchmarkLogInfo - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1901823 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField",
            "value": 1030,
            "unit": "ns/op\t     710 B/op\t      13 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithField - ns/op",
            "value": 1030,
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
            "value": 2035,
            "unit": "ns/op\t    1056 B/op\t      22 allocs/op",
            "extra": "583688 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - ns/op",
            "value": 2035,
            "unit": "ns/op",
            "extra": "583688 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - B/op",
            "value": 1056,
            "unit": "B/op",
            "extra": "583688 times\n4 procs"
          },
          {
            "name": "BenchmarkLogWithFields - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "583688 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting",
            "value": 1070,
            "unit": "ns/op\t     433 B/op\t       7 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkLogFormatting - ns/op",
            "value": 1070,
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
            "value": 138.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "8190612 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - ns/op",
            "value": 138.1,
            "unit": "ns/op",
            "extra": "8190612 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "8190612 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryRegister - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8190612 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService",
            "value": 50.46,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "22771862 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - ns/op",
            "value": 50.46,
            "unit": "ns/op",
            "extra": "22771862 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "22771862 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryGetService - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "22771862 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister",
            "value": 117263,
            "unit": "ns/op\t  155660 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRegistryDeregister - ns/op",
            "value": 117263,
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
            "value": 10.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Success - ns/op",
            "value": 10.56,
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
            "value": 23.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51969512 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - ns/op",
            "value": 23.08,
            "unit": "ns/op",
            "extra": "51969512 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51969512 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51969512 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure",
            "value": 24.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48331920 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - ns/op",
            "value": 24.89,
            "unit": "ns/op",
            "extra": "48331920 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48331920 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Failure - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48331920 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed",
            "value": 24.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50284435 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - ns/op",
            "value": 24.14,
            "unit": "ns/op",
            "extra": "50284435 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50284435 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Execute_Mixed - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50284435 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle",
            "value": 657.3,
            "unit": "ns/op\t     208 B/op\t       6 allocs/op",
            "extra": "1784332 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - ns/op",
            "value": 657.3,
            "unit": "ns/op",
            "extra": "1784332 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - B/op",
            "value": 208,
            "unit": "B/op",
            "extra": "1784332 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitions/Open-Close-Cycle - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1784332 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel",
            "value": 145.1,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "8263629 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - ns/op",
            "value": 145.1,
            "unit": "ns/op",
            "extra": "8263629 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "8263629 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8263629 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad",
            "value": 179.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6742982 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - ns/op",
            "value": 179.4,
            "unit": "ns/op",
            "extra": "6742982 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6742982 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_AllowUnderLoad - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6742982 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead",
            "value": 404.2,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3015236 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - ns/op",
            "value": 404.2,
            "unit": "ns/op",
            "extra": "3015236 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "3015236 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_StateTransitionOverhead - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3015236 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket",
            "value": 79.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15048531 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - ns/op",
            "value": 79.72,
            "unit": "ns/op",
            "extra": "15048531 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15048531 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15048531 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket",
            "value": 80.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14822260 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - ns/op",
            "value": 80.85,
            "unit": "ns/op",
            "extra": "14822260 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14822260 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14822260 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow",
            "value": 290,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4164613 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - ns/op",
            "value": 290,
            "unit": "ns/op",
            "extra": "4164613 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4164613 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Allow/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4164613 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket",
            "value": 98.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11866102 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - ns/op",
            "value": 98.34,
            "unit": "ns/op",
            "extra": "11866102 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11866102 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11866102 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket",
            "value": 98.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12206932 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - ns/op",
            "value": 98.89,
            "unit": "ns/op",
            "extra": "12206932 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12206932 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12206932 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow",
            "value": 44361,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46836 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - ns/op",
            "value": 44361,
            "unit": "ns/op",
            "extra": "46836 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46836 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_Parallel/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46836 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d",
            "value": 80702,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15004 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - ns/op",
            "value": 80702,
            "unit": "ns/op",
            "extra": "15004 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15004 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/TokenBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15004 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d",
            "value": 80338,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14931 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - ns/op",
            "value": 80338,
            "unit": "ns/op",
            "extra": "14931 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14931 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/LeakyBucket-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14931 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d",
            "value": 486770,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2464 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - ns/op",
            "value": 486770,
            "unit": "ns/op",
            "extra": "2464 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2464 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_MemoryUsage/SlidingWindow-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2464 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket",
            "value": 7965,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "150640 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - ns/op",
            "value": 7965,
            "unit": "ns/op",
            "extra": "150640 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "150640 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/TokenBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "150640 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket",
            "value": 8026,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149540 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - ns/op",
            "value": 8026,
            "unit": "ns/op",
            "extra": "149540 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "149540 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/LeakyBucket - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "149540 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow",
            "value": 28717,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41802 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - ns/op",
            "value": 28717,
            "unit": "ns/op",
            "extra": "41802 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41802 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare_BurstHandling/SlidingWindow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41802 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow",
            "value": 80.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14835331 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - ns/op",
            "value": 80.88,
            "unit": "ns/op",
            "extra": "14835331 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14835331 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14835331 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN",
            "value": 80.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14881812 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - ns/op",
            "value": 80.63,
            "unit": "ns/op",
            "extra": "14881812 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14881812 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14881812 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak",
            "value": 73.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16242032 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - ns/op",
            "value": 73.15,
            "unit": "ns/op",
            "extra": "16242032 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16242032 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Leak - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16242032 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware",
            "value": 82.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14510959 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - ns/op",
            "value": 82.12,
            "unit": "ns/op",
            "extra": "14510959 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14510959 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14510959 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel",
            "value": 100.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11888786 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - ns/op",
            "value": 100.4,
            "unit": "ns/op",
            "extra": "11888786 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11888786 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11888786 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_",
            "value": 81.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14759228 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - ns/op",
            "value": 81.27,
            "unit": "ns/op",
            "extra": "14759228 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14759228 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14759228 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d",
            "value": 81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14811969 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - ns/op",
            "value": 81,
            "unit": "ns/op",
            "extra": "14811969 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14811969 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_CapacitySizes/Capacity-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14811969 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_",
            "value": 82.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14804407 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - ns/op",
            "value": 82.95,
            "unit": "ns/op",
            "extra": "14804407 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14804407 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14804407 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d",
            "value": 81.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14771191 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - ns/op",
            "value": 81.05,
            "unit": "ns/op",
            "extra": "14771191 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14771191 times\n4 procs"
          },
          {
            "name": "BenchmarkLeakyBucketRateLimiter_RateSizes/Rate-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14771191 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow",
            "value": 288.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4131259 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - ns/op",
            "value": 288.1,
            "unit": "ns/op",
            "extra": "4131259 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4131259 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4131259 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN",
            "value": 282.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4193619 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - ns/op",
            "value": 282.8,
            "unit": "ns/op",
            "extra": "4193619 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4193619 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4193619 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup",
            "value": 1381,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "858495 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - ns/op",
            "value": 1381,
            "unit": "ns/op",
            "extra": "858495 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "858495 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Cleanup - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "858495 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware",
            "value": 292,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4104884 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - ns/op",
            "value": 292,
            "unit": "ns/op",
            "extra": "4104884 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4104884 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4104884 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel",
            "value": 61256,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45566 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - ns/op",
            "value": 61256,
            "unit": "ns/op",
            "extra": "45566 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45566 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45566 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_",
            "value": 68.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17450875 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - ns/op",
            "value": 68.73,
            "unit": "ns/op",
            "extra": "17450875 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17450875 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-_ - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17450875 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d",
            "value": 86.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13756624 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - ns/op",
            "value": 86.27,
            "unit": "ns/op",
            "extra": "13756624 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13756624 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindowRateLimiter_WindowSizes/Size-d - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13756624 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow",
            "value": 80.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14866664 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - ns/op",
            "value": 80.72,
            "unit": "ns/op",
            "extra": "14866664 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14866664 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Allow - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14866664 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN",
            "value": 80.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14930191 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - ns/op",
            "value": 80.34,
            "unit": "ns/op",
            "extra": "14930191 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14930191 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_AllowN - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14930191 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill",
            "value": 71.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16916241 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - ns/op",
            "value": 71.06,
            "unit": "ns/op",
            "extra": "16916241 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16916241 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Refill - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16916241 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware",
            "value": 81.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14709306 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - ns/op",
            "value": 81.81,
            "unit": "ns/op",
            "extra": "14709306 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14709306 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Middleware - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14709306 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel",
            "value": 98.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12179025 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - ns/op",
            "value": 98.77,
            "unit": "ns/op",
            "extra": "12179025 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12179025 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_Parallel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12179025 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain",
            "value": 82.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14489796 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - ns/op",
            "value": 82.61,
            "unit": "ns/op",
            "extra": "14489796 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14489796 times\n4 procs"
          },
          {
            "name": "BenchmarkTokenBucketRateLimiter_MiddlewareChain - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14489796 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success",
            "value": 4.045,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "295665064 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - ns/op",
            "value": 4.045,
            "unit": "ns/op",
            "extra": "295665064 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "295665064 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_Success - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "295665064 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess",
            "value": 2258,
            "unit": "ns/op\t     544 B/op\t      10 allocs/op",
            "extra": "532560 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - ns/op",
            "value": 2258,
            "unit": "ns/op",
            "extra": "532560 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - B/op",
            "value": 544,
            "unit": "B/op",
            "extra": "532560 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_EventualSuccess - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "532560 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail",
            "value": 2301,
            "unit": "ns/op\t     560 B/op\t      11 allocs/op",
            "extra": "489031 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - ns/op",
            "value": 2301,
            "unit": "ns/op",
            "extra": "489031 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - B/op",
            "value": 560,
            "unit": "B/op",
            "extra": "489031 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Execute_AlwaysFail - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "489031 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff",
            "value": 682.1,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "1737241 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - ns/op",
            "value": 682.1,
            "unit": "ns/op",
            "extra": "1737241 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "1737241 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_CalculateBackoff - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1737241 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware",
            "value": 38.06,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "30493579 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - ns/op",
            "value": 38.06,
            "unit": "ns/op",
            "extra": "30493579 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "30493579 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "30493579 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries",
            "value": 2378,
            "unit": "ns/op\t     600 B/op\t      13 allocs/op",
            "extra": "471517 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - ns/op",
            "value": 2378,
            "unit": "ns/op",
            "extra": "471517 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - B/op",
            "value": 600,
            "unit": "B/op",
            "extra": "471517 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Middleware_WithRetries - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "471517 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain",
            "value": 38.85,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "29415654 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - ns/op",
            "value": 38.85,
            "unit": "ns/op",
            "extra": "29415654 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "29415654 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_MiddlewareChain - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "29415654 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly",
            "value": 116.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10285048 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - ns/op",
            "value": 116.3,
            "unit": "ns/op",
            "extra": "10285048 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10285048 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/NetworkErrorsOnly - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10285048 times\n4 procs"
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
            "value": 0.3118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/RetryNone - ns/op",
            "value": 0.3118,
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
            "value": 113.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10471101 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - ns/op",
            "value": 113.2,
            "unit": "ns/op",
            "extra": "10471101 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10471101 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/Combine - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10471101 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry",
            "value": 21.35,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51355531 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - ns/op",
            "value": 21.35,
            "unit": "ns/op",
            "extra": "51355531 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "51355531 times\n4 procs"
          },
          {
            "name": "BenchmarkRetryStrategies/HTTPStatusCodeRetry - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "51355531 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts",
            "value": 1174,
            "unit": "ns/op\t     288 B/op\t       6 allocs/op",
            "extra": "952778 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - ns/op",
            "value": 1174,
            "unit": "ns/op",
            "extra": "952778 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "952778 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Few-Attempts - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "952778 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts",
            "value": 23459,
            "unit": "ns/op\t    2464 B/op\t      46 allocs/op",
            "extra": "55540 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - ns/op",
            "value": 23459,
            "unit": "ns/op",
            "extra": "55540 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - B/op",
            "value": 2464,
            "unit": "B/op",
            "extra": "55540 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Many-Attempts - allocs/op",
            "value": 46,
            "unit": "allocs/op",
            "extra": "55540 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc",
            "value": 1635,
            "unit": "ns/op\t     304 B/op\t      27 allocs/op",
            "extra": "680386 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - ns/op",
            "value": 1635,
            "unit": "ns/op",
            "extra": "680386 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - B/op",
            "value": 304,
            "unit": "B/op",
            "extra": "680386 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_DifferentRetryOptions/Complex-RetryFunc - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "680386 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService",
            "value": 8.516,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "144670338 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - ns/op",
            "value": 8.516,
            "unit": "ns/op",
            "extra": "144670338 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "144670338 times\n4 procs"
          },
          {
            "name": "BenchmarkNewService - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "144670338 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint",
            "value": 84.36,
            "unit": "ns/op\t      83 B/op\t       0 allocs/op",
            "extra": "12322314 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - ns/op",
            "value": 84.36,
            "unit": "ns/op",
            "extra": "12322314 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - B/op",
            "value": 83,
            "unit": "B/op",
            "extra": "12322314 times\n4 procs"
          },
          {
            "name": "BenchmarkAddEndpoint - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12322314 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint",
            "value": 80.25,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "14674755 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - ns/op",
            "value": 80.25,
            "unit": "ns/op",
            "extra": "14674755 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "14674755 times\n4 procs"
          },
          {
            "name": "BenchmarkNewEndpoint - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "14674755 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware",
            "value": 88.37,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "13610232 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - ns/op",
            "value": 88.37,
            "unit": "ns/op",
            "extra": "13610232 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "13610232 times\n4 procs"
          },
          {
            "name": "BenchmarkWithMiddleware - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13610232 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister",
            "value": 2624,
            "unit": "ns/op\t    2712 B/op\t      33 allocs/op",
            "extra": "432374 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - ns/op",
            "value": 2624,
            "unit": "ns/op",
            "extra": "432374 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - B/op",
            "value": 2712,
            "unit": "B/op",
            "extra": "432374 times\n4 procs"
          },
          {
            "name": "BenchmarkServerRegister - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "432374 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode",
            "value": 215.7,
            "unit": "ns/op\t     128 B/op\t       3 allocs/op",
            "extra": "5545100 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - ns/op",
            "value": 215.7,
            "unit": "ns/op",
            "extra": "5545100 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5545100 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecEncode - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5545100 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode",
            "value": 817.4,
            "unit": "ns/op\t     992 B/op\t       9 allocs/op",
            "extra": "1441074 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - ns/op",
            "value": 817.4,
            "unit": "ns/op",
            "extra": "1441074 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - B/op",
            "value": 992,
            "unit": "B/op",
            "extra": "1441074 times\n4 procs"
          },
          {
            "name": "BenchmarkJSONCodecDecode - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1441074 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling",
            "value": 108812,
            "unit": "ns/op\t    8839 B/op\t      99 allocs/op",
            "extra": "9789 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - ns/op",
            "value": 108812,
            "unit": "ns/op",
            "extra": "9789 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - B/op",
            "value": 8839,
            "unit": "B/op",
            "extra": "9789 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPRequestHandling - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "9789 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow",
            "value": 113447,
            "unit": "ns/op\t    9273 B/op\t     107 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - ns/op",
            "value": 113447,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkFullRequestFlow - B/op",
            "value": 9273,
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
            "value": 54.66,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "21148057 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - ns/op",
            "value": 54.66,
            "unit": "ns/op",
            "extra": "21148057 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "21148057 times\n4 procs"
          },
          {
            "name": "BenchmarkServiceDiscovery - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "21148057 times\n4 procs"
          }
        ]
      }
    ]
  }
}