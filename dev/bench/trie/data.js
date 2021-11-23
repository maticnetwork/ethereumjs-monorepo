window.BENCHMARK_DATA = {
  "lastUpdate": 1637687835735,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "58e5e0d059d55965b349c922af0ca6177bcb7f26",
          "message": "Util: New Release v7.1.3 (#1525), rewrite of ethjs-util toUtf8 method, additional tests\n\n* util: rewrote toUtf8 method and removed from ethjs-util internal.ts import, added code docs, expanded tests\r\n\r\n* util: throw in toUtf8() method on uneven hex string input\r\n\r\n* util -> release: bumped version to v7.1.3, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* util -> release: rebuild documentation\r\n\r\n* Updated package-lock.json\r\n\r\n* Apply suggestions from code review\r\n\r\nchangelog grammar improvements\r\n\r\n* util -> release: added README note on ethjs-util internalization, temporary module doc links fix\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-10-14T13:04:35+02:00",
          "tree_id": "713e316ce01252008d2e291b4d79e02ce18ff907",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/58e5e0d059d55965b349c922af0ca6177bcb7f26"
        },
        "date": 1634209843870,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11119,
            "range": "±12.74%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13359,
            "range": "±3.01%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11805,
            "range": "±3.88%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7799,
            "range": "±15.99%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 10903,
            "range": "±21.08%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1101,
            "range": "±7.37%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 139,
            "range": "±83.32%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 105,
            "range": "±29.36%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.94,
            "range": "±113.33%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4fd401cc2ec1ab6cd78211851a7c9c8fe63f32e1",
          "message": "client, blockchain, block, common: merge work continued (part 2) (#1512) (continued engine work, eth_getLogs stub, small additions, other)\n\n* tidy up, use Hardfork enum in common usage, re-add resolve comments to webpack config\r\n\r\n* add object, array, value validators\r\n\r\n* continue implementing engine endpoints\r\n\r\n* wip work\r\n\r\n* rpc:\r\n  align rpc block response with standard fields\r\n  ensure errors are thrown not returned for jayson to return error object in response\r\n\r\n* search for parents in forkchoiceUpdated\r\nadd variable for last finalized block\r\npass common from header.validate to blockchain.cliqueActiveSigners so it can respect the set consensus type from the block\r\n\r\n* fixes\r\n\r\n* miner: store bound event handlers so they can be properly removed\r\n\r\n* fixes\r\n\r\n* client: temporary eth_getLogs RPC mockup method for Merge interoperability with Lodestar\r\n\r\n* client: adopt merge with-signer genesis with generated test account address\r\n\r\n* fixes\r\n\r\n* update readme example with standardized fields\r\n\r\n* client: merge fixes\r\n\r\n* client: fixed getLogs RPC method validation triggering error messages on Lodestar M3 sync\r\n\r\n* tidy up\r\n\r\n* updates\r\n\r\n* client: switched to a more robust consensus type selection when reading geth genesis configuration files\r\n\r\n* block, common: allow baseFeePerGas as an optional field for a genesis header, fix bug in Block not considering baseFeePerGas for genesis header instantiation when HF is london or higher\r\n\r\n* client: fixed a bug not setting TD correctly on ETH STATUS msg exchange for TD being 0\r\n\r\n* client: made consensus type choice in Geth parameter parsing more robust, merge interop hotfixes\r\n\r\n* updates\r\n\r\n* client: fixed baseFeePerGas parsing, some clean-up\r\n\r\n* client: added logger output on fetcher result storing error\r\n\r\n* client: more granular chain updates to update along with TD for precise Merge detection, option to only add non-Merge headers/blocks to chain\r\n\r\n* changes\r\n\r\n* client: extracted extensive RPC logging to dedicated rpcDebug option, added compact RPC logging to regular debug logger\r\n\r\n* updates\r\n\r\n* add object, array, value validators\r\n\r\n* non merge-related client changes\r\n\r\n* client: clear fetcher task queue on Merge to ensure fetcher stops fetching blocks, Merge log msg improvements\r\n\r\n* client: rework double calling of Chain update() within putBlocks() (prevents miner continuation on Merge)\r\n\r\n* blockchain: fixed a bug in copy() not properly copying the Common instance (leading to unintentionally modifying client execution Common)\r\n\r\n* client: fixed setting HF in engine getPayload RPC method\r\n\r\n* Minor\r\n\r\n* lint fixes\r\n\r\n* common: fixed common forkHash parameter name for shanghai and merge HF sections in chain files, fixed fork hash calculation for TD forks\r\n\r\n* client: fixed RPC debug output for batch requests\r\n\r\n* small updates\r\n\r\n* remove interop hack of passing common to cliqueActiveSigners\r\n\r\n* assume sync'd in rpc test setup\r\n\r\n* add block header test for genesis with baseFeePerGas defined\r\n\r\n* add cli option `--rpcStubGetLogs` until implemented\r\n\r\n* add test for clearing fetcher queue\r\n\r\n* add merge integration tests\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-10-16T10:10:32+02:00",
          "tree_id": "1d70dbf816da1b4bb291c0ae3fff51736cbae6b5",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4fd401cc2ec1ab6cd78211851a7c9c8fe63f32e1"
        },
        "date": 1634372127342,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15948,
            "range": "±10.37%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16816,
            "range": "±2.64%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 9738,
            "range": "±18.58%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12198,
            "range": "±19.32%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14568,
            "range": "±2.32%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1184,
            "range": "±6.85%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 101,
            "range": "±99.08%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 141,
            "range": "±8.02%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 15.99,
            "range": "±111.66%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e001ba033b751e47d2691355e51abd9eda2b9b00",
          "message": "client: fix hanging integration test (#1531)\n\n(reverts sync event handler changes)",
          "timestamp": "2021-10-16T17:34:35-07:00",
          "tree_id": "05296ecf0d9212272e04daa9833dc950ed5336ef",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e001ba033b751e47d2691355e51abd9eda2b9b00"
        },
        "date": 1634431375350,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12393,
            "range": "±12.10%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14293,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11179,
            "range": "±2.50%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 5968,
            "range": "±20.15%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 11987,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1109,
            "range": "±6.82%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 128,
            "range": "±89.08%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 116,
            "range": "±17.79%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 26.77,
            "range": "±17.04%",
            "unit": "ops/sec",
            "extra": "20 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ce67138360db3a0bc9344377aa14038d1d98571",
          "message": "client: Pithos, Docker, Common/VM Genesis-With-Contracts Extension, Client Log Files, JSON RPC Server Separation, client node-gyp removal, Code Cleanup (#1530)\n\n* add genesis code and storage to cli parsing/common/stateManager for pithos genesis support for deposit contract at 0x0000...0000\r\n\r\n* small fixes\r\n\r\n* engine code tidying\r\n\r\n* split Engine API onto own port (default: 8550)\r\n\r\n* add cli --extIP\r\n\r\n* quicken eth_blockNumber\r\n\r\n* improve speed and resilience\r\n\r\n* add pithos folder with readme, config and docker\r\n\r\n* add blockBuilder option to not insert block into blockchain (improves engine api speed/efficiency)\r\n\r\n* consensusValidated: check if block exists in the canonical chain before throwing unknown header\r\n\r\n* add lighthouse to pithos readme\r\n\r\n* tidy / fixes / updates\r\n\r\n* don't respond to eth protocol reqs for block ranges greater than current height (fixes geth disconnect on pithos)\r\ni first modified the query to contain the max query size but geth didn't like the results, while valid, disconnected with subprotocol_error\r\n\r\n* merge codeAndStorage into GenesisState\r\n\r\n* extend builder opts from block opts, more informative rpc endpoint opened message\r\n\r\n* update yargs to latest\r\nclean up unneeded rpc options from config\r\nadd log file saving and rotate functionality\r\noutput client version in logger and json rpc namespaces\r\nadd basic Dockerfile and docker-compose\r\nupdate libp2p-noise to new chainsafe maintained version to drop bcrypto dep which used node-gyp rebuild\r\n\r\n* set config init with no loggers to default to level error, simplifies use (sorry about this one! getting a little carried away ^_^)",
          "timestamp": "2021-10-21T10:34:44+02:00",
          "tree_id": "0584037704d058db946a525b2f8d223495d6faa0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1ce67138360db3a0bc9344377aa14038d1d98571"
        },
        "date": 1634805606909,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15698,
            "range": "±12.56%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17391,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12243,
            "range": "±15.21%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10075,
            "range": "±27.78%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17075,
            "range": "±3.01%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1170,
            "range": "±6.85%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 106,
            "range": "±119.47%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 121,
            "range": "±24.56%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 26.29,
            "range": "±11.50%",
            "unit": "ops/sec",
            "extra": "16 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2dfa7ee48ace1366f06f111797aae6b69b0d7b41",
          "message": "Client: Add executeBlocks debug option (#1538)\n\n* client: added start/stop logic to PeerPool for a cleaner separation of initialization and execution logic\r\n\r\n* client: added --executeBlocks debug option",
          "timestamp": "2021-10-21T22:21:21+02:00",
          "tree_id": "501b194c4b9f52b6a8ed2a61a418887bfcb3f7d4",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2dfa7ee48ace1366f06f111797aae6b69b0d7b41"
        },
        "date": 1634848006523,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11613,
            "range": "±14.11%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12658,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11684,
            "range": "±4.10%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6443,
            "range": "±21.45%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 10829,
            "range": "±19.09%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1047,
            "range": "±7.82%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 132,
            "range": "±74.61%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 104,
            "range": "±28.50%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 23.25,
            "range": "±11.67%",
            "unit": "ops/sec",
            "extra": "29 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "125e210cdcc412f901420ef038f230a6d060cb51",
          "message": "client/vm: small fixes (#1541)\n\n* fix generateGenesis setting toBalance, don't overwrite codeHash and stateRoot, tidy\r\n\r\n* fix chalk output, update chalk to latest, tidy file and add typedocs\r\n\r\n* attempt to resolve peer:error event handler memory leak by removing bound listener after disconnect, tidy\r\n\r\n* fix new webpack polyfill errors from node-fetch, which we don't use so can safely pass false\r\n\r\n* nit: more stateManager generateGenesis code tidying\r\n\r\n* update multiaddrs to latest to fix libp2p so it doesn't bring node-fetch into webpack/karma",
          "timestamp": "2021-10-22T20:37:33+02:00",
          "tree_id": "3a7ae16642c89e2738b3100bace4db724d2cd7c9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/125e210cdcc412f901420ef038f230a6d060cb51"
        },
        "date": 1634928191520,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11935,
            "range": "±11.39%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12631,
            "range": "±3.13%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11726,
            "range": "±3.53%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6896,
            "range": "±22.53%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13558,
            "range": "±4.12%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1123,
            "range": "±7.39%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 134,
            "range": "±84.97%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 109,
            "range": "±23.69%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 25.49,
            "range": "±11.12%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "85b4253208a930b5e0ca6fae1952e951e2a578a7",
          "message": "Tx, Block, VM: Consistent Error Context for Error Messages (#1540)\n\n* block: added consistent error context to error messages\r\n\r\n* blockchain: fixed test\r\n\r\n* block: internalized _errorPostfix creation to only call hash() function in error case, made _error() protected (do not call from the outside but keep extensible), more robust error case hash creation\r\n\r\n* tx: added consistent error context for error msgs to all tx types\r\n\r\n* vm -> runBlock(): added consistent error context to error messages\r\n\r\n* tx, block: separate msg creation and error object instantiation on error annotation for cleaner stack trace\r\n\r\n* tx, block, vm: added public errorStr() methods to block and tx for a compact error representation of the object, adding consistent error context to VM.runTx()\r\n\r\n* tx: hardhat E2E error msg fix",
          "timestamp": "2021-10-25T23:09:07+02:00",
          "tree_id": "a83c4f0cc35f542ce40c235f03842d74e32cc92e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/85b4253208a930b5e0ca6fae1952e951e2a578a7"
        },
        "date": 1635196463782,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12325,
            "range": "±12.25%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14060,
            "range": "±2.19%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12716,
            "range": "±3.40%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7485,
            "range": "±19.88%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13342,
            "range": "±3.75%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1065,
            "range": "±7.33%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 132,
            "range": "±84.55%",
            "unit": "ops/sec",
            "extra": "39 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 113,
            "range": "±11.84%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.26,
            "range": "±121.02%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f15f28b580923d040c6bdf9de68ff38cf1f5fab4",
          "message": "client: sync stability fixes (#1543)\n\n* only attach once to global Event.PEER_ERROR on peerpool open (and clear listeners on close)\r\nthis should fix the MaxListenersExceededWarning for peer:error listeners\r\n\r\n* skip handleNewBlock if number exceeds one past our height since we can't validate it\r\n\r\n* if logger is missing message set to `(empty message)` so it doesn't crash the process\r\n\r\n* fetcher: enqueue jobs that return with empty result (could be no returned headers or bodies)\r\n\r\n* execution: use new blockchain getIteratorHead method\r\n\r\n* tests: add height to mocked chain\r\n\r\n* client: still add block hash to the known-by-peer list even if not further validated/processed\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-10-26T10:59:18+02:00",
          "tree_id": "9bbe4b4317c167128ca2e7029facbe3ee7e9ba6b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f15f28b580923d040c6bdf9de68ff38cf1f5fab4"
        },
        "date": 1635239070019,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13281,
            "range": "±14.42%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14339,
            "range": "±2.26%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11960,
            "range": "±9.62%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8554,
            "range": "±21.99%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14081,
            "range": "±3.84%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1159,
            "range": "±6.59%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 110,
            "range": "±92.09%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 143,
            "range": "±6.24%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.15,
            "range": "±120.38%",
            "unit": "ops/sec",
            "extra": "16 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a66230ff47ced51a15dfa51a102e6c0070ed555c",
          "message": "Client: Added Fetcher debug logger (#1544)\n\n* client: added Fetcher debug logger\r\n\r\n* check if header contains non-empty txs or uncles, tidy\r\n\r\n* nit: move `const values` line closer to where it's used\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-10-27T10:23:19+02:00",
          "tree_id": "467afcf1a005b1e2d8b20bf1b9fa6b202b1d32f1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a66230ff47ced51a15dfa51a102e6c0070ed555c"
        },
        "date": 1635323275294,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16403,
            "range": "±13.00%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17940,
            "range": "±2.57%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10042,
            "range": "±22.42%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15334,
            "range": "±4.36%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 16708,
            "range": "±2.44%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1212,
            "range": "±7.22%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 110,
            "range": "±121.36%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 141,
            "range": "±7.88%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.12,
            "range": "±122.18%",
            "unit": "ops/sec",
            "extra": "16 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcbee4a0f1f9d0f055caf2cb7190f363bb783bca",
          "message": "Client: More Fetcher Improvements (#1545)\n\n* client -> Fetcher: improved reenqueue debug messages\r\n\r\n* client: aligned VM execution in SYNC_FETCHER_FETCHED event\r\n\r\n* client -> Fetcher: fixed tests\r\n\r\n* client -> Fetcher: set max write queue size to 4 by default to not overload the client on the request side (particularly on growing execution load)\r\n\r\n* client -> executeBlocks option: added special verbose tx execution mode activated with --execute_blocks=BLOCK_NR[*] (useful for debugging on slow txs)",
          "timestamp": "2021-10-27T21:24:39+02:00",
          "tree_id": "c918d6e3f483ab535494381ce1594e6e66caba99",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fcbee4a0f1f9d0f055caf2cb7190f363bb783bca"
        },
        "date": 1635362993831,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10669,
            "range": "±12.49%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12173,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11334,
            "range": "±3.95%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6901,
            "range": "±19.31%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 11760,
            "range": "±22.85%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1121,
            "range": "±7.57%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 134,
            "range": "±83.98%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 104,
            "range": "±28.14%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.85,
            "range": "±109.05%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e72d5eb4f6484e843a0ee4c0deff8cae78ecee0f",
          "message": "tx: add getDataFee to tx cache (#1532)\n\n* tx: add getDataFee to tx cache\r\n\r\n* tx: added tests for getDataFee when frozen and not frozen\r\n\r\n* tx: cleanup in baseTransaction\r\n\r\n* tx: add getDataFee caching for legacy tx\r\n\r\n* tx: remove unneeded return statements\r\n\r\n* tx: invalidate cached dataFee on hardfork change\r\n\r\n* tx: add cache invalidation for all tx types\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-10-27T21:51:54+02:00",
          "tree_id": "2e869eae270b2c60050d7c113b36e8cb27114c25",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e72d5eb4f6484e843a0ee4c0deff8cae78ecee0f"
        },
        "date": 1635364625931,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11208,
            "range": "±14.10%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12941,
            "range": "±3.36%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12344,
            "range": "±3.36%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6658,
            "range": "±23.16%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13692,
            "range": "±3.79%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1113,
            "range": "±7.09%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 133,
            "range": "±86.16%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 108,
            "range": "±26.49%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 22.97,
            "range": "±11.25%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec5bbe1f6b65dcb5d01ec5cf1a52d5b611c30305",
          "message": "client: add websocket support (#1508)\n\n* client: add websocket RPC endpoint to client",
          "timestamp": "2021-10-28T05:56:34-04:00",
          "tree_id": "354b82db1d0b6412546efcec208e72cf2c505eb8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ec5bbe1f6b65dcb5d01ec5cf1a52d5b611c30305"
        },
        "date": 1635415521526,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16636,
            "range": "±10.83%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18421,
            "range": "±2.33%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10156,
            "range": "±20.09%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14879,
            "range": "±3.02%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 16069,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1209,
            "range": "±6.55%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 82.47,
            "range": "±91.27%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 142,
            "range": "±7.88%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 21.11,
            "range": "±86.86%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a49575b03ceb2d8bf4946f521cf065b01c6ac5f",
          "message": "tx: remove event listener and add datafee caching with hardfork (#1550)\n\n* tx: remove event listener for hardforkChanged\r\n\r\n* tx: add back dataFee caching",
          "timestamp": "2021-11-01T12:06:11+01:00",
          "tree_id": "39e9dfbdb6fdc10b4ec2bcfc691c7c3fb659b05d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5a49575b03ceb2d8bf4946f521cf065b01c6ac5f"
        },
        "date": 1635765106697,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10724,
            "range": "±13.60%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 11957,
            "range": "±4.83%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10663,
            "range": "±5.22%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8742,
            "range": "±12.93%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5916,
            "range": "±21.25%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 928,
            "range": "±10.27%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 196,
            "range": "±11.73%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 58.39,
            "range": "±66.77%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.14,
            "range": "±97.34%",
            "unit": "ops/sec",
            "extra": "33 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5727a0e60f3d67a84202235187811aaca4ea59f",
          "message": "monorepo: update nyc and verdaccio (#1547)\n\n* monorepo: update nyc and verdaccio\r\n\r\n* Monorepo: updated verdaccio and npm-auth-to-token dev dependencies to use caret dependency ranges\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-11-01T12:45:33+01:00",
          "tree_id": "d8d501a139ea66acefd2de2692dbda9a536173c9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b5727a0e60f3d67a84202235187811aaca4ea59f"
        },
        "date": 1635767461821,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12280,
            "range": "±12.56%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14076,
            "range": "±2.75%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12700,
            "range": "±3.79%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6621,
            "range": "±20.77%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13334,
            "range": "±4.23%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1125,
            "range": "±6.85%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 133,
            "range": "±88.48%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 121,
            "range": "±9.58%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.24,
            "range": "±119.19%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ade4233ddffffdd146b386de701762196a8c941c",
          "message": "dependencies: dedupe rlp import (#1549)",
          "timestamp": "2021-11-02T09:16:36-07:00",
          "tree_id": "aef344777d2e0b7be58668a5eecad79c9b2d7791",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ade4233ddffffdd146b386de701762196a8c941c"
        },
        "date": 1635870160353,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 9739,
            "range": "±14.51%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 11901,
            "range": "±4.23%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10809,
            "range": "±4.27%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7830,
            "range": "±13.44%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 8154,
            "range": "±19.96%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 942,
            "range": "±8.80%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 143,
            "range": "±65.96%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 102,
            "range": "±11.37%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 21.68,
            "range": "±11.44%",
            "unit": "ops/sec",
            "extra": "33 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a0ab3012a9cefc8d384eb5edcbd524cabca4c73",
          "message": "vm benchmarks: skip blocks reporting false positives for alert threshold (#1546)\n\n* increase vm benchmarks threshold from 200% to 270% to cover false positives\r\n\r\n* add prettier.config.js to root, run on config and workflow files\r\n\r\n* Revert \"increase vm benchmarks threshold from 200% to 270% to cover false positives\"\r\n\r\nThis reverts commit 1621ae520e99a04e9e51ca16033c8e1f05e84855.\r\n\r\n* skip blocks that frequently trip alert threshold",
          "timestamp": "2021-11-03T18:00:04+01:00",
          "tree_id": "c8a3dd69581656488191363558d5668254318c0a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5a0ab3012a9cefc8d384eb5edcbd524cabca4c73"
        },
        "date": 1635959097480,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15043,
            "range": "±13.42%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16313,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11648,
            "range": "±14.95%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8904,
            "range": "±28.24%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15278,
            "range": "±2.36%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1132,
            "range": "±7.01%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 114,
            "range": "±104.71%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 107,
            "range": "±27.22%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.83,
            "range": "±127.79%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c230e51439a8dc2f6bd358e43e933fc126e6986e",
          "message": "Common: add custom params for Optimism L2 (#1554)\n\n* Add custom params for Optimism L2\r\n\r\n* Note on London hardfork\r\n\r\n* Requested fixes\r\n\r\n* Edit note",
          "timestamp": "2021-11-05T09:29:24+01:00",
          "tree_id": "e8be74da857aa6c6e4b3ebdb86b196689519a395",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c230e51439a8dc2f6bd358e43e933fc126e6986e"
        },
        "date": 1636101223592,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18933,
            "range": "±11.44%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19648,
            "range": "±2.53%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12003,
            "range": "±22.11%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 16714,
            "range": "±2.36%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17433,
            "range": "±3.42%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1324,
            "range": "±5.73%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 95.09,
            "range": "±117.87%",
            "unit": "ops/sec",
            "extra": "21 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 152,
            "range": "±7.11%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.33,
            "range": "±155.09%",
            "unit": "ops/sec",
            "extra": "12 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "309988c2371782585e50015aa41d1e8600604e80",
          "message": "Common, Block: Add arrowGlacier HF (#1527)\n\n* common/vm: add arrowGlacier HF\r\n\r\n* common: fix tests\r\n\r\n* common: fix eip 4345 minimum hardfork\r\n\r\n* block: added ArrowGlacier difficulty tests\r\n\r\n* Common: added forkHash for ArrowGlacier HF\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-11-08T16:59:09+01:00",
          "tree_id": "e40d4faa1aad3cdabb60e64a7e7f44d784433359",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/309988c2371782585e50015aa41d1e8600604e80"
        },
        "date": 1636387460092,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12845,
            "range": "±13.33%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13914,
            "range": "±2.57%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11227,
            "range": "±11.48%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 5951,
            "range": "±31.06%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13379,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1032,
            "range": "±8.12%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 120,
            "range": "±87.29%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 99.94,
            "range": "±37.70%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.21,
            "range": "±112.07%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a54b3a40f9a2c9fef46e094a954b857bedb88f9",
          "message": "Common, Tx, Block, Blockchain, VM, Client: New Arrow Glacier Releases (#1555)\n\n* Common -> release: bumped version to v2.6.0, added CHANGELOG entry, updated upstream dependency versions, updated README\r\n\r\n* Common -> release: rebuild documentation\r\n\r\n* tx -> Release: bumped version to v3.4.0, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* Block -> release: bumped version to v3.6.0, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* Block -> release: rebuild documentation\r\n\r\n* blockchain -> release: bumped version to v5.5.0, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* VM -> release: bumped version to v5.6.0, added CHANGELOG entry, updated upstream dependency versions, updated README\r\n\r\n* client -> release: bumped version to v0.2, added CHANGELOG entry (TODO)\r\n\r\n* Rebuild package-lock.json file\r\n\r\n* client -> release: additional CHANGELOG work\r\n\r\n* client -> release: finalized CHANGELOG\r\n\r\n* fix: reinit vmexec's txCounter on every new block range executed\r\n\r\n* Apply suggestions from code review\r\n\r\n* update tx error debug log msg `accessList=num (size)` to accessListCount=num` (for increased clarity/readability)\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-11-09T08:59:51+01:00",
          "tree_id": "0324ab3d0be2d392140c4792e0d3343b7907fb52",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4a54b3a40f9a2c9fef46e094a954b857bedb88f9"
        },
        "date": 1636445147434,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11648,
            "range": "±12.61%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13236,
            "range": "±3.06%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12196,
            "range": "±3.78%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6873,
            "range": "±19.44%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13189,
            "range": "±4.06%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1101,
            "range": "±7.17%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 115,
            "range": "±102.09%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 113,
            "range": "±16.33%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 25.34,
            "range": "±11.11%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d0ba62c588381232d94b55a98684bb93e90785d",
          "message": "VM: Test Runner Improvements (#1560)\n\n* VM -> tests: added error message to tx runtime error in GeneralStateTestsRunner\r\n\r\n* VM -> tests: added basic execution time console output to state and blockchain tests\r\n\r\n* VM -> tests: simplify path call structure in test loader\r\n\r\n* VM -> tests: added new customTestsPath CLI option\r\n\r\n* VM -> tests: replaced file name test run log output with fully qualified sub directory path for easier test localization\r\n\r\n* organize tester files into own folder, organize imports, add @types/minimist and @types/node-dir\r\n\r\n* ignore benchmark block 9422911 due to high variance\r\n\r\n* update path import, tidy, copy over needed changes to testLoader in tx library\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-11-10T12:29:50+01:00",
          "tree_id": "1fb334425d5b88357edf5f1e243b3545e2c97e89",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3d0ba62c588381232d94b55a98684bb93e90785d"
        },
        "date": 1636544127515,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11613,
            "range": "±12.62%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12987,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11649,
            "range": "±4.26%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6837,
            "range": "±22.50%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12610,
            "range": "±6.44%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1156,
            "range": "±6.60%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 137,
            "range": "±85.99%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 112,
            "range": "±22.26%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 14.36,
            "range": "±85.62%",
            "unit": "ops/sec",
            "extra": "20 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33eeac3162aee00047be4a59180039e1a7da5f9a",
          "message": "client: save receipts and implement getLogs, getTxReceipt, getTxByHash (#1556)\n\n* save receipts, implement getLogs, getTxReceipt, getTxByHash\r\n* getLogs toBlock query fix, add test using fromBlock/toBlock as numbers, make `--ws` default false\r\n* fix: reinit vmexec's txCounter on every new block range executed\r\n* add effectiveGasPrice to receipt\r\n* fix client coverage reporting (each .nycrc needs its own includes, inheriting it was causing problems)\r\n* fix typos\r\n* add getLogs block range limit, megabyte size limit (150mb default for json rpc, 2mib limit for devp2p receipts response)\r\nrefactor getLogs to accept block param as block instead of blockHash (simplification, no need to re-query for the blocks)\r\n* Add pooledTxs encoding test to bump coverage\r\n* add more tests for handling/encoding/decoding GetReceipts/Receipts\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-11-14T13:00:42-08:00",
          "tree_id": "cf4c273104b32d88a014200b6df34f5f039386c9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/33eeac3162aee00047be4a59180039e1a7da5f9a"
        },
        "date": 1636923958534,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11393,
            "range": "±13.35%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12800,
            "range": "±3.37%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12013,
            "range": "±3.81%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7067,
            "range": "±22.03%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13523,
            "range": "±4.29%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1110,
            "range": "±6.79%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 136,
            "range": "±87.59%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 112,
            "range": "±27.60%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.24,
            "range": "±12.83%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aec64d05230cc0dd7050d7bf072dca6178dc7b62",
          "message": "VM: Add BaseStateManager (#1548)\n\n* vm -> BaseStateManager: added class and constructor, improved DefaultStateManager class documentation\r\n\r\n* VM -> StateManager: removed unused warm() method from Cache\r\n\r\n* VM -> StateManager: made Cache backend agnostic by replacing direct trie calls with operation callbacks\r\n\r\n* VM -> StateManager: moved getAccount(), putAccount() and touchAccount() to BaseStateManager, made _debug a member variable of BaseStateManater\r\n\r\n* VM -> StateManager: moved deleteAccount(), getOriginalContractStorage(), clearOriginalStorageCache(), generateAccessList() to BaseStateManager, checkpoint(), commit(), revert() calls into super class\r\n\r\n* VM -> StateManager: use putAccount() in generateGenesis() in favor of direct trie access, move generateCanonicalGenesis(), generateGenesis() to BaseStateManager()\r\n\r\n* VM -> StateManager: moved generateGenesis() back to StateManager (direct trie access needed), moved EIP-2929 functionality (addWarmedAddress(),...) to BaseStateManager\r\n\r\n* VM -> StateManager: some cleanup\r\n\r\n* VM -> StateManager: flush cache in generateGenesis() call to allow for directly using the provided putAccount() method\r\n\r\n* VM -> StateManager: moved generateGenesis() to BaseStateManager\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-11-15T12:15:23+01:00",
          "tree_id": "fae56673038ab527efdf5a3b71ccd930a884de01",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/aec64d05230cc0dd7050d7bf072dca6178dc7b62"
        },
        "date": 1636975210357,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15165,
            "range": "±13.47%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16037,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10621,
            "range": "±15.97%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10871,
            "range": "±19.99%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14537,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1152,
            "range": "±7.58%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 96.17,
            "range": "±125.67%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 101,
            "range": "±41.37%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.43,
            "range": "±126.33%",
            "unit": "ops/sec",
            "extra": "23 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0f9eed1c3740242b94f5dec996961ae53530de6",
          "message": "blockchain: Change toBuffer to toArrayLike for BNs (#1566)\n\n* blockchain: Change toBuffer to toArrayLike for BNs\r\n\r\n* update changelog",
          "timestamp": "2021-11-15T08:52:38-08:00",
          "tree_id": "2df420a8ce92786da2e805d34254e70d37aee457",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d0f9eed1c3740242b94f5dec996961ae53530de6"
        },
        "date": 1636995450757,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14753,
            "range": "±12.50%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16425,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10585,
            "range": "±16.05%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10769,
            "range": "±22.01%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14695,
            "range": "±2.63%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1106,
            "range": "±7.33%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 112,
            "range": "±99.52%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 103,
            "range": "±35.83%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.91,
            "range": "±122.56%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76a3b129183813a353fea28494083bc160d59778",
          "message": "blockchain: v5.5.1 release (#1567)\n\n* blockchain: prepare v5.5.1 release\r\n\r\n* client fix cli tape tests: prevent end being called more than once per suite",
          "timestamp": "2021-11-16T09:42:48+01:00",
          "tree_id": "b847e37280969c6170c66245f8b0b172e4392bc8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/76a3b129183813a353fea28494083bc160d59778"
        },
        "date": 1637052506134,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10176,
            "range": "±12.42%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12547,
            "range": "±2.81%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11383,
            "range": "±3.92%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6622,
            "range": "±20.79%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 11865,
            "range": "±8.37%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1105,
            "range": "±7.18%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 141,
            "range": "±83.45%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 120,
            "range": "±11.05%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.54,
            "range": "±11.07%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb5240bec432b5c37f38fd5483483f805f24f234",
          "message": "block: point difficulty tests to ethereum-tests (#1571)\n\n* block: switch difficulty tests back to Eth-Tests\r\n* delete unused test data artifact\r\n* tidy\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-11-16T13:25:04-08:00",
          "tree_id": "5b6684bb90e396451beb00109ce12fbf09903708",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/eb5240bec432b5c37f38fd5483483f805f24f234"
        },
        "date": 1637098170598,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16819,
            "range": "±11.80%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18281,
            "range": "±2.71%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10218,
            "range": "±21.18%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 16430,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17651,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1251,
            "range": "±6.25%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 93.56,
            "range": "±115.42%",
            "unit": "ops/sec",
            "extra": "24 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 143,
            "range": "±7.79%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 16.41,
            "range": "±111.94%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67ff9e822747b99b24686bb89be5b1814f0eef81",
          "message": "dedupe vm ci step (don't run test:API twice) (#1573)",
          "timestamp": "2021-11-17T12:41:53+01:00",
          "tree_id": "52926e430dad032d54816b1bb37aab826bfea6e7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/67ff9e822747b99b24686bb89be5b1814f0eef81"
        },
        "date": 1637149625286,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11840,
            "range": "±14.40%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14580,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13444,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7402,
            "range": "±26.49%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14048,
            "range": "±3.68%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1104,
            "range": "±6.98%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 127,
            "range": "±93.80%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 113,
            "range": "±11.75%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.28,
            "range": "±116.73%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bccef10b73fda2373122a4109d1c2eb433bc2ead",
          "message": "Common: Add berlin/london hardforks to kovan (#1577)\n\n* Common: Add berlin/london hardforks to kovan\r\n\r\n* Update tests and fix forkhash",
          "timestamp": "2021-11-18T10:19:06+01:00",
          "tree_id": "3e6de769dc64d9c6092e894046c798e6e2fec453",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/bccef10b73fda2373122a4109d1c2eb433bc2ead"
        },
        "date": 1637227482686,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10761,
            "range": "±15.47%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12423,
            "range": "±3.81%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11054,
            "range": "±4.16%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6409,
            "range": "±19.78%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 11929,
            "range": "±4.66%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1007,
            "range": "±8.25%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 143,
            "range": "±70.57%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 117,
            "range": "±8.04%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.15,
            "range": "±107.72%",
            "unit": "ops/sec",
            "extra": "28 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5e806508459fb4c633ac0e95bbadec841e2f365",
          "message": "Monorepo: correct license note (#1582)",
          "timestamp": "2021-11-22T12:49:41+01:00",
          "tree_id": "9c63e76b6bd78cf9f2cabe6a349b1ba4496df8a8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c5e806508459fb4c633ac0e95bbadec841e2f365"
        },
        "date": 1637582138443,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10663,
            "range": "±12.49%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12979,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11037,
            "range": "±4.55%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6247,
            "range": "±20.30%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13069,
            "range": "±3.90%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1104,
            "range": "±7.11%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 135,
            "range": "±82.89%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 88.36,
            "range": "±52.53%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.81,
            "range": "±106.21%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ead38a9d77c6d123bfad48298d25a2b645d08778",
          "message": "fix buffer compare in demo script (#1584)",
          "timestamp": "2021-11-22T14:17:10-08:00",
          "tree_id": "5d07e54b61dd8c9925852e8a2d711dc3379e6150",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ead38a9d77c6d123bfad48298d25a2b645d08778"
        },
        "date": 1637619765218,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10212,
            "range": "±13.48%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12455,
            "range": "±3.63%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11459,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6266,
            "range": "±23.75%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12852,
            "range": "±4.52%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1014,
            "range": "±7.56%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 133,
            "range": "±74.99%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 114,
            "range": "±7.78%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 22.28,
            "range": "±10.12%",
            "unit": "ops/sec",
            "extra": "30 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddf21a50302e13c957c2a6f07d8f23d5169718e1",
          "message": "monorepo, vm: remove npm vulnerabilities (#1579)\n\n* vm: update tap-spec package\r\n\r\n* monorepo: remove old npm-auth-to-token package\r\n\r\n* monorepo: fix npm login in e2e-publish script\r\n\r\n* monorepo: troubleshooting npm login\r\n\r\n* monorepo: troubleshooting npm login\r\n\r\n* monorepo: troubleshooting npm login\r\n\r\n* monorepo: cleanup in e2e-publish script\r\n\r\n* monorepo: remove unused npm login package\r\n\r\n* vm: remove tap-spec completely, make formatTest script generic",
          "timestamp": "2021-11-23T18:12:01+01:00",
          "tree_id": "3ce69ac9b55f53de626a8e70b17c6d34141194d0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ddf21a50302e13c957c2a6f07d8f23d5169718e1"
        },
        "date": 1637687835172,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14176,
            "range": "±12.64%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15647,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11109,
            "range": "±15.79%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12049,
            "range": "±21.68%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14634,
            "range": "±3.30%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1092,
            "range": "±7.41%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 128,
            "range": "±102.29%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 102,
            "range": "±35.45%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 12.9,
            "range": "±107.93%",
            "unit": "ops/sec",
            "extra": "23 samples"
          }
        ]
      }
    ]
  }
}