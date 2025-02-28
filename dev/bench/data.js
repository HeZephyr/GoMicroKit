window.BENCHMARK_DATA = {
  "lastUpdate": 1740724356616,
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
      }
    ]
  }
}