!(function(ng) {
  var app = ng.module('docs', ['cfp.hotkeys'])

  app.value('pages', {"/features/address_resolution/custom_address_resolution/":{"title":"Custom Address Resolution","summary":"Custom Address Resolution <small class=\"text-muted\">feature</small>","path":"/features/address_resolution/custom_address_resolution/"},"/features/address_resolution/":{"title":"Address Resolution","summary":"Address Resolution <small class=\"text-muted\">section</small>","path":"/features/address_resolution/"},"/features/asynchronous_io/executing_queries/":{"title":"Executing Queries","summary":"Executing Queries <small class=\"text-muted\">feature</small>","path":"/features/asynchronous_io/executing_queries/"},"/features/asynchronous_io/preparing_statements/":{"title":"Preparing Statements","summary":"Preparing Statements <small class=\"text-muted\">feature</small>","path":"/features/asynchronous_io/preparing_statements/"},"/features/asynchronous_io/":{"title":"Asynchronous Io","summary":"Asynchronous Io <small class=\"text-muted\">section</small>","path":"/features/asynchronous_io/"},"/features/basics/batch_statements/":{"title":"Batch Statements","summary":"Batch Statements <small class=\"text-muted\">feature</small>","path":"/features/basics/batch_statements/"},"/features/basics/datatypes/":{"title":"Datatypes","summary":"Datatypes <small class=\"text-muted\">feature</small>","path":"/features/basics/datatypes/"},"/features/basics/prepared_statements/":{"title":"Prepared Statements","summary":"Prepared Statements <small class=\"text-muted\">feature</small>","path":"/features/basics/prepared_statements/"},"/features/basics/":{"title":"Basics","summary":"Basics <small class=\"text-muted\">section</small>","path":"/features/basics/"},"/features/basics/result_paging/":{"title":"Result Paging","summary":"Result Paging <small class=\"text-muted\">feature</small>","path":"/features/basics/result_paging/"},"/features/debugging/execution_info/":{"title":"Execution Info","summary":"Execution Info <small class=\"text-muted\">feature</small>","path":"/features/debugging/execution_info/"},"/features/debugging/":{"title":"Debugging","summary":"Debugging <small class=\"text-muted\">section</small>","path":"/features/debugging/"},"/features/debugging/request_tracing/":{"title":"Request Tracing","summary":"Request Tracing <small class=\"text-muted\">feature</small>","path":"/features/debugging/request_tracing/"},"/features/error_handling/connection_heartbeat/":{"title":"Connection Heartbeat","summary":"Connection Heartbeat <small class=\"text-muted\">feature</small>","path":"/features/error_handling/connection_heartbeat/"},"/features/error_handling/":{"title":"Error Handling","summary":"Error Handling <small class=\"text-muted\">section</small>","path":"/features/error_handling/"},"/features/error_handling/request_execution/":{"title":"Request Execution","summary":"Request Execution <small class=\"text-muted\">feature</small>","path":"/features/error_handling/request_execution/"},"/features/load_balancing/datacenter_aware/":{"title":"Datacenter Aware","summary":"Datacenter Aware <small class=\"text-muted\">feature</small>","path":"/features/load_balancing/datacenter_aware/"},"/features/load_balancing/default_policy/":{"title":"Default Policy","summary":"Default Policy <small class=\"text-muted\">feature</small>","path":"/features/load_balancing/default_policy/"},"/features/load_balancing/implementing_a_policy/":{"title":"Implementing A Policy","summary":"Implementing A Policy <small class=\"text-muted\">feature</small>","path":"/features/load_balancing/implementing_a_policy/"},"/features/load_balancing/":{"title":"Load Balancing","summary":"Load Balancing <small class=\"text-muted\">section</small>","path":"/features/load_balancing/"},"/features/load_balancing/round_robin/":{"title":"Round Robin","summary":"Round Robin <small class=\"text-muted\">feature</small>","path":"/features/load_balancing/round_robin/"},"/features/load_balancing/token_aware/":{"title":"Token Aware","summary":"Token Aware <small class=\"text-muted\">feature</small>","path":"/features/load_balancing/token_aware/"},"/features/load_balancing/whitelist/":{"title":"Whitelist","summary":"Whitelist <small class=\"text-muted\">feature</small>","path":"/features/load_balancing/whitelist/"},"/features/":{"title":"Features","summary":"Features <small class=\"text-muted\">section</small>","path":"/features/"},"/features/reconnection/automatic_reconnection/":{"title":"Automatic Reconnection","summary":"Automatic Reconnection <small class=\"text-muted\">feature</small>","path":"/features/reconnection/automatic_reconnection/"},"/features/reconnection/":{"title":"Reconnection","summary":"Reconnection <small class=\"text-muted\">section</small>","path":"/features/reconnection/"},"/features/retry_policies/downgrading_consistency/":{"title":"Downgrading Consistency","summary":"Downgrading Consistency <small class=\"text-muted\">feature</small>","path":"/features/retry_policies/downgrading_consistency/"},"/features/retry_policies/fallthrough/":{"title":"Fallthrough","summary":"Fallthrough <small class=\"text-muted\">feature</small>","path":"/features/retry_policies/fallthrough/"},"/features/retry_policies/":{"title":"Retry Policies","summary":"Retry Policies <small class=\"text-muted\">section</small>","path":"/features/retry_policies/"},"/features/security/":{"title":"Security","summary":"Security <small class=\"text-muted\">section</small>","path":"/features/security/"},"/features/security/ssl_encryption/":{"title":"Ssl Encryption","summary":"Ssl Encryption <small class=\"text-muted\">feature</small>","path":"/features/security/ssl_encryption/"},"/features/security/standard_authentication/":{"title":"Standard Authentication","summary":"Standard Authentication <small class=\"text-muted\">feature</small>","path":"/features/security/standard_authentication/"},"/features/state_listeners/membership_changes/":{"title":"Membership Changes","summary":"Membership Changes <small class=\"text-muted\">feature</small>","path":"/features/state_listeners/membership_changes/"},"/features/state_listeners/":{"title":"State Listeners","summary":"State Listeners <small class=\"text-muted\">section</small>","path":"/features/state_listeners/"},"/features/state_listeners/schema_changes/":{"title":"Schema Changes","summary":"Schema Changes <small class=\"text-muted\">feature</small>","path":"/features/state_listeners/schema_changes/"},"/api/":{"title":"Cassandra","summary":"<code>Cassandra</code> <small class=\"text-muted\">module</small>","path":"/api/"},"/api/auth/":{"title":"Auth","summary":"<code>Auth</code> <small class=\"text-muted\">module</small>","path":"/api/auth/"},"/api/retry/":{"title":"Retry","summary":"<code>Retry</code> <small class=\"text-muted\">module</small>","path":"/api/retry/"},"/api/retry/policy/":{"title":"Policy","summary":"<code>Policy</code> <small class=\"text-muted\">module</small>","path":"/api/retry/policy/"},"/api/error/":{"title":"Error","summary":"<code>Error</code> <small class=\"text-muted\">module</small>","path":"/api/error/"},"/api/errors/":{"title":"Errors","summary":"<code>Errors</code> <small class=\"text-muted\">module</small>","path":"/api/errors/"},"/api/errors/host_error/":{"title":"HostError","summary":"<code>HostError</code> <small class=\"text-muted\">module</small>","path":"/api/errors/host_error/"},"/api/errors/execution_error/":{"title":"ExecutionError","summary":"<code>ExecutionError</code> <small class=\"text-muted\">module</small>","path":"/api/errors/execution_error/"},"/api/errors/validation_error/":{"title":"ValidationError","summary":"<code>ValidationError</code> <small class=\"text-muted\">module</small>","path":"/api/errors/validation_error/"},"/api/statement/":{"title":"Statement","summary":"<code>Statement</code> <small class=\"text-muted\">module</small>","path":"/api/statement/"},"/api/compression/":{"title":"Compression","summary":"<code>Compression</code> <small class=\"text-muted\">module</small>","path":"/api/compression/"},"/api/reconnection/":{"title":"Reconnection","summary":"<code>Reconnection</code> <small class=\"text-muted\">module</small>","path":"/api/reconnection/"},"/api/execution/":{"title":"Execution","summary":"<code>Execution</code> <small class=\"text-muted\">module</small>","path":"/api/execution/"},"/api/load_balancing/":{"title":"LoadBalancing","summary":"<code>LoadBalancing</code> <small class=\"text-muted\">module</small>","path":"/api/load_balancing/"},"/api/statements/":{"title":"Statements","summary":"<code>Statements</code> <small class=\"text-muted\">module</small>","path":"/api/statements/"},"/api/address_resolution/":{"title":"AddressResolution","summary":"<code>AddressResolution</code> <small class=\"text-muted\">module</small>","path":"/api/address_resolution/"},"/api/retry/policies/":{"title":"Policies","summary":"<code>Policies</code> <small class=\"text-muted\">module</small>","path":"/api/retry/policies/"},"/api/auth/providers/":{"title":"Providers","summary":"<code>Providers</code> <small class=\"text-muted\">module</small>","path":"/api/auth/providers/"},"/api/compression/compressors/":{"title":"Compressors","summary":"<code>Compressors</code> <small class=\"text-muted\">module</small>","path":"/api/compression/compressors/"},"/api/reconnection/policies/":{"title":"Policies","summary":"<code>Policies</code> <small class=\"text-muted\">module</small>","path":"/api/reconnection/policies/"},"/api/address_resolution/policies/":{"title":"Policies","summary":"<code>Policies</code> <small class=\"text-muted\">module</small>","path":"/api/address_resolution/policies/"},"/api/load_balancing/policies/":{"title":"Policies","summary":"<code>Policies</code> <small class=\"text-muted\">module</small>","path":"/api/load_balancing/policies/"},"/api/uuid/":{"title":"Uuid","summary":"<code>Uuid</code> <small class=\"text-muted\">class</small>","path":"/api/uuid/"},"/api/host/":{"title":"Host","summary":"<code>Host</code> <small class=\"text-muted\">class</small>","path":"/api/host/"},"/api/auth/provider/":{"title":"Provider","summary":"<code>Provider</code> <small class=\"text-muted\">class</small>","path":"/api/auth/provider/"},"/api/auth/authenticator/":{"title":"Authenticator","summary":"<code>Authenticator</code> <small class=\"text-muted\">class</small>","path":"/api/auth/authenticator/"},"/api/table/":{"title":"Table","summary":"<code>Table</code> <small class=\"text-muted\">class</small>","path":"/api/table/"},"/api/errors/server_error/":{"title":"ServerError","summary":"<code>ServerError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/server_error/"},"/api/errors/internal_error/":{"title":"InternalError","summary":"<code>InternalError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/internal_error/"},"/api/errors/decoding_error/":{"title":"DecodingError","summary":"<code>DecodingError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/decoding_error/"},"/api/errors/encoding_error/":{"title":"EncodingError","summary":"<code>EncodingError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/encoding_error/"},"/api/errors/ioerror/":{"title":"IOError","summary":"<code>IOError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/ioerror/"},"/api/errors/timeout_error/":{"title":"TimeoutError","summary":"<code>TimeoutError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/timeout_error/"},"/api/errors/unavailable_error/":{"title":"UnavailableError","summary":"<code>UnavailableError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/unavailable_error/"},"/api/errors/overloaded_error/":{"title":"OverloadedError","summary":"<code>OverloadedError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/overloaded_error/"},"/api/errors/is_bootstrapping_error/":{"title":"IsBootstrappingError","summary":"<code>IsBootstrappingError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/is_bootstrapping_error/"},"/api/errors/truncate_error/":{"title":"TruncateError","summary":"<code>TruncateError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/truncate_error/"},"/api/errors/write_timeout_error/":{"title":"WriteTimeoutError","summary":"<code>WriteTimeoutError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/write_timeout_error/"},"/api/errors/read_timeout_error/":{"title":"ReadTimeoutError","summary":"<code>ReadTimeoutError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/read_timeout_error/"},"/api/errors/client_error/":{"title":"ClientError","summary":"<code>ClientError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/client_error/"},"/api/errors/protocol_error/":{"title":"ProtocolError","summary":"<code>ProtocolError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/protocol_error/"},"/api/errors/authentication_error/":{"title":"AuthenticationError","summary":"<code>AuthenticationError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/authentication_error/"},"/api/errors/unprepared_error/":{"title":"UnpreparedError","summary":"<code>UnpreparedError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/unprepared_error/"},"/api/errors/syntax_error/":{"title":"SyntaxError","summary":"<code>SyntaxError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/syntax_error/"},"/api/errors/unauthorized_error/":{"title":"UnauthorizedError","summary":"<code>UnauthorizedError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/unauthorized_error/"},"/api/errors/invalid_error/":{"title":"InvalidError","summary":"<code>InvalidError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/invalid_error/"},"/api/errors/configuration_error/":{"title":"ConfigurationError","summary":"<code>ConfigurationError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/configuration_error/"},"/api/errors/already_exists_error/":{"title":"AlreadyExistsError","summary":"<code>AlreadyExistsError</code> <small class=\"text-muted\">class</small>","path":"/api/errors/already_exists_error/"},"/api/errors/no_hosts_available/":{"title":"NoHostsAvailable","summary":"<code>NoHostsAvailable</code> <small class=\"text-muted\">class</small>","path":"/api/errors/no_hosts_available/"},"/api/result/":{"title":"Result","summary":"<code>Result</code> <small class=\"text-muted\">class</small>","path":"/api/result/"},"/api/future/":{"title":"Future","summary":"<code>Future</code> <small class=\"text-muted\">class</small>","path":"/api/future/"},"/api/future/listener/":{"title":"Listener","summary":"<code>Listener</code> <small class=\"text-muted\">class</small>","path":"/api/future/listener/"},"/api/column/":{"title":"Column","summary":"<code>Column</code> <small class=\"text-muted\">class</small>","path":"/api/column/"},"/api/session/":{"title":"Session","summary":"<code>Session</code> <small class=\"text-muted\">class</small>","path":"/api/session/"},"/api/cluster/":{"title":"Cluster","summary":"<code>Cluster</code> <small class=\"text-muted\">class</small>","path":"/api/cluster/"},"/api/listener/":{"title":"Listener","summary":"<code>Listener</code> <small class=\"text-muted\">class</small>","path":"/api/listener/"},"/api/keyspace/":{"title":"Keyspace","summary":"<code>Keyspace</code> <small class=\"text-muted\">class</small>","path":"/api/keyspace/"},"/api/time_uuid/":{"title":"TimeUuid","summary":"<code>TimeUuid</code> <small class=\"text-muted\">class</small>","path":"/api/time_uuid/"},"/api/compression/compressor/":{"title":"Compressor","summary":"<code>Compressor</code> <small class=\"text-muted\">class</small>","path":"/api/compression/compressor/"},"/api/reconnection/schedule/":{"title":"Schedule","summary":"<code>Schedule</code> <small class=\"text-muted\">class</small>","path":"/api/reconnection/schedule/"},"/api/reconnection/policy/":{"title":"Policy","summary":"<code>Policy</code> <small class=\"text-muted\">class</small>","path":"/api/reconnection/policy/"},"/api/execution/info/":{"title":"Info","summary":"<code>Info</code> <small class=\"text-muted\">class</small>","path":"/api/execution/info/"},"/api/load_balancing/policy/":{"title":"Policy","summary":"<code>Policy</code> <small class=\"text-muted\">class</small>","path":"/api/load_balancing/policy/"},"/api/load_balancing/plan/":{"title":"Plan","summary":"<code>Plan</code> <small class=\"text-muted\">class</small>","path":"/api/load_balancing/plan/"},"/api/uuid/generator/":{"title":"Generator","summary":"<code>Generator</code> <small class=\"text-muted\">class</small>","path":"/api/uuid/generator/"},"/api/execution/trace/":{"title":"Trace","summary":"<code>Trace</code> <small class=\"text-muted\">class</small>","path":"/api/execution/trace/"},"/api/execution/trace/event/":{"title":"Event","summary":"<code>Event</code> <small class=\"text-muted\">class</small>","path":"/api/execution/trace/event/"},"/api/statements/void/":{"title":"Void","summary":"<code>Void</code> <small class=\"text-muted\">class</small>","path":"/api/statements/void/"},"/api/statements/bound/":{"title":"Bound","summary":"<code>Bound</code> <small class=\"text-muted\">class</small>","path":"/api/statements/bound/"},"/api/statements/batch/":{"title":"Batch","summary":"<code>Batch</code> <small class=\"text-muted\">class</small>","path":"/api/statements/batch/"},"/api/execution/options/":{"title":"Options","summary":"<code>Options</code> <small class=\"text-muted\">class</small>","path":"/api/execution/options/"},"/api/statements/simple/":{"title":"Simple","summary":"<code>Simple</code> <small class=\"text-muted\">class</small>","path":"/api/statements/simple/"},"/api/address_resolution/policy/":{"title":"Policy","summary":"<code>Policy</code> <small class=\"text-muted\">class</small>","path":"/api/address_resolution/policy/"},"/api/statements/prepared/":{"title":"Prepared","summary":"<code>Prepared</code> <small class=\"text-muted\">class</small>","path":"/api/statements/prepared/"},"/api/retry/policies/default/":{"title":"Default","summary":"<code>Default</code> <small class=\"text-muted\">class</small>","path":"/api/retry/policies/default/"},"/api/auth/providers/password/":{"title":"Password","summary":"<code>Password</code> <small class=\"text-muted\">class</small>","path":"/api/auth/providers/password/"},"/api/retry/policies/fallthrough/":{"title":"Fallthrough","summary":"<code>Fallthrough</code> <small class=\"text-muted\">class</small>","path":"/api/retry/policies/fallthrough/"},"/api/compression/compressors/lz4/":{"title":"Lz4","summary":"<code>Lz4</code> <small class=\"text-muted\">class</small>","path":"/api/compression/compressors/lz4/"},"/api/reconnection/policies/constant/":{"title":"Constant","summary":"<code>Constant</code> <small class=\"text-muted\">class</small>","path":"/api/reconnection/policies/constant/"},"/api/compression/compressors/snappy/":{"title":"Snappy","summary":"<code>Snappy</code> <small class=\"text-muted\">class</small>","path":"/api/compression/compressors/snappy/"},"/api/address_resolution/policies/none/":{"title":"None","summary":"<code>None</code> <small class=\"text-muted\">class</small>","path":"/api/address_resolution/policies/none/"},"/api/reconnection/policies/exponential/":{"title":"Exponential","summary":"<code>Exponential</code> <small class=\"text-muted\">class</small>","path":"/api/reconnection/policies/exponential/"},"/api/load_balancing/policies/white_list/":{"title":"WhiteList","summary":"<code>WhiteList</code> <small class=\"text-muted\">class</small>","path":"/api/load_balancing/policies/white_list/"},"/api/load_balancing/policies/round_robin/":{"title":"RoundRobin","summary":"<code>RoundRobin</code> <small class=\"text-muted\">class</small>","path":"/api/load_balancing/policies/round_robin/"},"/api/load_balancing/policies/token_aware/":{"title":"TokenAware","summary":"<code>TokenAware</code> <small class=\"text-muted\">class</small>","path":"/api/load_balancing/policies/token_aware/"},"/api/retry/policies/downgrading_consistency/":{"title":"DowngradingConsistency","summary":"<code>DowngradingConsistency</code> <small class=\"text-muted\">class</small>","path":"/api/retry/policies/downgrading_consistency/"},"/api/load_balancing/policies/dcaware_round_robin/":{"title":"DCAwareRoundRobin","summary":"<code>DCAwareRoundRobin</code> <small class=\"text-muted\">class</small>","path":"/api/load_balancing/policies/dcaware_round_robin/"},"/api/address_resolution/policies/ec2multi_region/":{"title":"EC2MultiRegion","summary":"<code>EC2MultiRegion</code> <small class=\"text-muted\">class</small>","path":"/api/address_resolution/policies/ec2multi_region/"},"/":{"title":"Introduction","summary":"Home Page <small class=\"text-muted\">page</small>","path":"/"}})

  app.provider('search', function() {
    function localSearchFactory($http, $timeout, $q) {

      // The actual service is a function that takes a query string and
      // returns a promise to the search results
      // (In this case we just resolve the promise immediately as it is not
      // inherently an async process)
      return function(q) {
        return $q.when(index.search(q));
      };
    };
    localSearchFactory.$inject = ['$http', '$timeout', '$q'];

    function webWorkerSearchFactory($q, $rootScope) {
      var searchIndex = $q.defer();
      var results;

      var worker = new Worker('/js/search-worker.js');

      // The worker will send us a message in two situations:
      // - when the index has been built, ready to run a query
      // - when it has completed a search query and the results are available
      worker.onmessage = function(oEvent) {
        switch(oEvent.data.e) {
          case 'index-ready':
            searchIndex.resolve();
            break;
          case 'query-ready':
            results.resolve(oEvent.data.d);
            break;
        }
      };

      // The actual service is a function that takes a query string and
      // returns a promise to the search results
      return function(q) {

        // We only run the query once the index is ready
        return searchIndex.promise.then(function() {

          results = $q.defer();
          worker.postMessage({ q: q });
          return results.promise;
        });
      };
    };
    webWorkerSearchFactory.$inject = ['$q', '$rootScope'];

    return {
      $get: window.Worker ? webWorkerSearchFactory : localSearchFactory
    };
  })

  app.controller('search', [
    '$scope',
    '$sce',
    'search',
    'pages',
    function($scope, $sce, search, pages) {
      $scope.hasResults = false;
      $scope.results = null;
      $scope.current = null;

      function clear() {
        $scope.hasResults = false;
        $scope.results = null;
        $scope.current = null;
      }

      $scope.search = function() {
        if ($scope.q.length >= 2) {
          search($scope.q).then(function(hits) {
            if (hits.length > 0) {
              $scope.hasResults = true;
              $scope.results = hits.map(function(hit) {
                return pages[hit.ref]
              })
              $scope.current = 0;
            } else {
              clear()
            }
          })
        } else {
          clear()
        }
      };

      $scope.reset = function() {
        $scope.q = null;
        clear()
      }

      $scope.submit = function() {
        var result = $scope.results[$scope.current]

        if (result) {
          window.location.pathname = result.path;
        }
      }

      $scope.summary = function(item) {
        return $sce.trustAsHtml(item.summary);
      }

      $scope.moveDown = function(e) {
        console.log('moveDown', e)
        if ($scope.hasResults && $scope.current < ($scope.results.length - 1)) {
          $scope.current++
          e.stopPropagation()
        }
      }

      $scope.moveUp = function(e) {
        console.log('moveUp', e)
        if ($scope.hasResults && $scope.current > 0) {
          $scope.current--
          e.stopPropagation()
        }
      }
    }
  ])

  app.directive('search', [
    '$document',
    'hotkeys',
    function($document, hotkeys) {
      return function(scope, element, attrs) {
        hotkeys.add({
          combo: '/',
          description: 'Search docs...',
          callback: function(event, hotkey) {
            event.preventDefault()
            event.stopPropagation()
            element[0].focus()
          }
        })
      }
    }
  ])
})(angular)

$(function() {
  $('#content').height(
    Math.max(
      $(".side-nav").height(),
      $('#content').height()
    )
  );
});