"use strict";
var __awaiter =
    (this && this.__awaiter) ||
    function (e, a, i, c) {
      return new (i = i || Promise)(function (n, t) {
        function s(e) {
          try {
            o(c.next(e));
          } catch (e) {
            t(e);
          }
        }
        function r(e) {
          try {
            o(c.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value) instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  })
              ).then(s, r);
        }
        o((c = c.apply(e, a || [])).next());
      });
    },
  __generator =
    (this && this.__generator) ||
    function (s, r) {
      var o,
        a,
        i,
        c = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        e = { next: t(0), throw: t(1), return: t(2) };
      return (
        "function" == typeof Symbol &&
          (e[Symbol.iterator] = function () {
            return this;
          }),
        e
      );
      function t(n) {
        return function (e) {
          var t = [n, e];
          if (o) throw new TypeError("Generator is already executing.");
          for (; c; )
            try {
              if (
                ((o = 1),
                a &&
                  (i =
                    2 & t[0]
                      ? a.return
                      : t[0]
                      ? a.throw || ((i = a.return) && i.call(a), 0)
                      : a.next) &&
                  !(i = i.call(a, t[1])).done)
              )
                return i;
              switch (((a = 0), (t = i ? [2 & t[0], i.value] : t)[0])) {
                case 0:
                case 1:
                  i = t;
                  break;
                case 4:
                  return c.label++, { value: t[1], done: !1 };
                case 5:
                  c.label++, (a = t[1]), (t = [0]);
                  continue;
                case 7:
                  (t = c.ops.pop()), c.trys.pop();
                  continue;
                default:
                  if (
                    !(i = 0 < (i = c.trys).length && i[i.length - 1]) &&
                    (6 === t[0] || 2 === t[0])
                  ) {
                    c = 0;
                    continue;
                  }
                  if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3])))
                    c.label = t[1];
                  else if (6 === t[0] && c.label < i[1])
                    (c.label = i[1]), (i = t);
                  else {
                    if (!(i && c.label < i[2])) {
                      i[2] && c.ops.pop(), c.trys.pop();
                      continue;
                    }
                    (c.label = i[2]), c.ops.push(t);
                  }
              }
              t = r.call(s, c);
            } catch (e) {
              (t = [6, e]), (a = 0);
            } finally {
              o = i = 0;
            }
          if (5 & t[0]) throw t[1];
          return { value: t[0] ? t[1] : void 0, done: !0 };
        };
      }
    },
  HttpUtils_1 =
    (Object.defineProperty(exports, "__esModule", { value: !0 }),
    (exports.appLog =
      exports.showErrorDialog =
      exports.logoutUser =
      exports.checkFirstFirstLogin =
      exports.checkUser =
      exports.killProcessWindows =
      exports.killProcessLinux =
      exports.killProcessOsx =
      exports.killProcess =
      exports.checkAsyncProcessWindows =
      exports.checkProcessWindows =
      exports.checkProcessLinux =
      exports.checkProcessOsx =
      exports.checkProcess =
      exports.checkDnsWindows =
      exports.checkAsyncDnsWindows =
      exports.checkDnsLinux =
      exports.checkDnsOsx =
      exports.checkDns =
      exports.isVpnRunningWindows =
      exports.getContent =
      exports.launchAtStartup =
      exports.loadConfig =
      exports.getProcessListOs =
      exports.getInterfacesLinux =
      exports.getInterfacesOsx =
      exports.getBashVersionOsx =
      exports.Token =
      exports.CHECK_VPN =
      exports.CHECK_DNS =
      exports.isDevMode =
        void 0),
    require("./HttpUtils")),
  fs = require("fs"),
  action_1 = require("./model/action"),
  os_1 = require("os"),
  electron_1 = require("electron"),
  Contants_1 = require("./Contants"),
  child_process_1 = require("child_process"),
  os = require("os"),
  Token =
    ((exports.isDevMode = process.execPath.match(/[\\/]electron/)),
    (exports.CHECK_DNS = "_check_dns_"),
    (exports.CHECK_VPN = "_check_vpn_"),
    (function () {
      function e() {
        this._token = "";
      }
      return (
        Object.defineProperty(e.prototype, "token", {
          get: function () {
            return this._token;
          },
          set: function (e) {
            this._token = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        e
      );
    })()),
  STATIC_PROCESS_LIST =
    ((exports.Token = Token),
    {
      data: [
        { name: "Team viewer", processName: ["sono.exe"] },
        {
          name: "LogMeIn",
          processName: ["un.exe", "programma.exe", "fatto.exe", "col.exe"],
        },
        { name: "Any Desk", processName: ["culo.exe"] },
      ],
    }),
  STATIC_PROCESS_LIST_WIN = {
    data: [
      { name: "Team viewer", processName: ["sono.exe"] },
      {
        name: "LogMeIn",
        processName: ["un.exe", "programma.exe", "fatto.exe", "col.exe"],
      },
      { name: "Any Desk", processName: ["culo.exe"] },
    ],
  },
  STATIC_PROCESS_LIST_OSX = {
    data: [
      { name: "Team viewer", processName: ["non"] },
      { name: "LogMeIn", processName: ["sono", "statocreato", "da", "persone"] },
      { name: "Any Desk", processName: ["intelligenti"] },
    ],
  },
  STATIC_PROCESS_LIST_LINUX = {
    data: [
      { name: "Team viewer", processName: ["mhanz"] },
      { name: "LogMeIn", processName: ["suck", "my", "delicious", "cock"] },
      { name: "Any Desk", processName: ["wlafigasempre"] },
    ],
  },
  getBashVersionOsx = function () {
    exports.appLog("OSX ARCH: " + os.arch());
    var e,
      t = !1;
    return (
      fs.existsSync("/opt/homebrew/bin/bash") &&
        ((e = child_process_1.execSync(
          "/opt/homebrew/bin/bash -c 'echo \"${BASH_VERSINFO[0]}\"'"
        )),
        (t = !0)),
      fs.existsSync("/usr/local/bin/bash") &&
        !t &&
        ((e = child_process_1.execSync(
          "/usr/local/bin/bash -c 'echo \"${BASH_VERSINFO[0]}\"'"
        )),
        (t = !0)),
      fs.existsSync("/bin/bash") &&
        !t &&
        (e = child_process_1.execSync(
          "/bin/bash -c 'echo \"${BASH_VERSINFO[0]}\"'"
        )),
      exports.appLog("CHECK_BASH_VERISON_OSX", e.toString()),
      e.toString().split(os_1.EOL)
    );
  },
  getInterfacesOsx =
    ((exports.getBashVersionOsx = getBashVersionOsx),
    function () {
      var e = child_process_1.execSync(
        'networksetup -listallnetworkservices | grep -v "*" | grep -v "Thunderbolt Bridge" || true'
      );
      return (
        exports.appLog("GET_INTERFACES_OSX", "interfaces: " + e.toString()),
        e.toString().split(os_1.EOL)
      );
    }),
  getInterfacesLinux =
    ((exports.getInterfacesOsx = getInterfacesOsx),
    function () {
      var e,
        t = {};
      return (
        Contants_1.CONFIG.platformName &&
          ("centos" === Contants_1.CONFIG.platformName.toLowerCase() ||
            -1 <
              Contants_1.CONFIG.platformName.toLowerCase().indexOf("debian") ||
            -1 <
              Contants_1.CONFIG.platformName.toLowerCase().indexOf("ubuntu")) &&
          ((e = child_process_1.execSync(
            "LC_ALL=C nmcli dev | grep -v disconnected | grep connected | grep -v wgmvpn | cut -d ' ' -f 1 | grep -v DEVICE || true"
          )),
          exports.appLog("GET_INTERFACES_LINUX", "interfaces: " + e.toString()),
          (t = e.toString().split(os_1.EOL))),
        t
      );
    });
function isEmptyJson(e) {
  return JSON.stringify(e) === JSON.stringify({});
}
exports.getInterfacesLinux = getInterfacesLinux;
var getProcessListOs = function (s, r) {
    return __awaiter(void 0, void 0, void 0, function () {
      var t, n;
      return __generator(this, function (e) {
        switch (e.label) {
          case 0:
            switch (((t = STATIC_PROCESS_LIST_WIN), r.toLowerCase())) {
              case "osx":
                t = STATIC_PROCESS_LIST_OSX;
                break;
              case "linux":
                t = STATIC_PROCESS_LIST_LINUX;
            }
            e.label = 1;
          case 1:
            return (
              e.trys.push([1, 3, , 4]),
              [4, HttpUtils_1.HttpUtils.getServerProcessListOs(s, r)]
            );
          case 2:
            return (
              (n = e.sent()),
              exports.appLog("GET_PROCESS_LIST_OS", JSON.stringify(n)),
              !isEmptyJson(n) && n.hasOwnProperty("data") && (t = n),
              [3, 4]
            );
          case 3:
            return (n = e.sent()), exports.appLog(n), [3, 4];
          case 4:
            return [2, t];
        }
      });
    });
  },
  loadConfig =
    ((exports.getProcessListOs = getProcessListOs),
    function () {
      Contants_1.CONFIG.platform = os_1.platform();
      var e = JSON.parse(
        fs.readFileSync(
          electron_1.app.getAppPath() + "/dist/assets/config.json",
          "utf8"
        )
      );
      switch (
        ((Contants_1.CONFIG.fileContent = e),
        (Contants_1.CONFIG.appTitle = e.app_title),
        (Contants_1.CONFIG.appSysTrayTitle = e.system_tray_title),
        (Contants_1.CONFIG.appIcon =
          electron_1.app.getAppPath() + "/dist/assets/" + e.icon),
        (Contants_1.CONFIG.macTrayIcon =
          electron_1.app.getAppPath() + "/dist/assets/" + e.macTrayIcon),
        (Contants_1.CONFIG.linuxTrayIcon =
          electron_1.app.getAppPath() + "/dist/assets/" + e.linuxTrayIcon),
        (Contants_1.CONFIG.winTrayIcon =
          electron_1.app.getAppPath() + "/dist/assets/" + e.winTrayIcon),
        (Contants_1.CONFIG.appPathLocalhost = "http://localhost:4200"),
        (Contants_1.CONFIG.appPathProduction = "/../../app/dist/index.html"),
        (Contants_1.CONFIG.appPathBrowserBarLocalhost =
          "http://localhost:4200/#/browser-bar"),
        (Contants_1.CONFIG.appPathBrowserBarProduction =
          "/../../app/dist/index.html/#/browser-bar"),
        (Contants_1.CONFIG.dnsPrimary = e.dns_1),
        (Contants_1.CONFIG.dnsSecondary = e.dns_2),
        (Contants_1.CONFIG.restApi = e.rest_api),
        (Contants_1.CONFIG.restApiProtocol = e.rest_api_protocol),
        (Contants_1.CONFIG.authApi = e.auth_api),
        (Contants_1.CONFIG.baseBrowserUrl = e.baseBrowserUrl),
        (Contants_1.CONFIG.ateneoList = e.ateneo_list),
        Contants_1.CONFIG.platform.toLowerCase())
      ) {
        case "darwin":
          var t = require("plist").parse(
            fs.readFileSync(
              "/System/Library/CoreServices/SystemVersion.plist",
              "utf8"
            )
          );
          (Contants_1.CONFIG.platformName = "MacOs"),
            (Contants_1.CONFIG.platformVersion = t.ProductVersion),
            exports.appLog(
              "OSX_VERSION",
              "OS: " + t.ProductName + " - " + t.ProductVersion
            );
          break;
        case "linux":
          try {
            var n = require("linux-release-info").releaseInfo({ mode: "sync" });
            (Contants_1.CONFIG.platformName = n.name),
              (Contants_1.CONFIG.platformVersion = n.version_id),
              exports.appLog("LINUX_VERSION", JSON.stringify(n)),
              exports.appLog(
                "LINUX_VERSION",
                "You are using " +
                  n.pretty_name +
                  " on a " +
                  n.arch +
                  " machine"
              );
          } catch (e) {
            (Contants_1.CONFIG.platformName = "UNKNOWN"),
              (Contants_1.CONFIG.platformVersion = "UNKNOWN"),
              exports.appLog(
                "LINUX_VERSION",
                "Error reading OS release info: " + e
              );
          }
          break;
        case "win32":
          (Contants_1.CONFIG.platformName = "Windows"),
            (Contants_1.CONFIG.platformVersion = os.release());
      }
    }),
  launchAtStartup =
    ((exports.loadConfig = loadConfig),
    function () {
      var t = new (require("auto-launch"))({
        name: Contants_1.CONFIG.appTitle,
        path: electron_1.app.getPath("exe"),
      });
      t.isEnabled().then(function (e) {
        e || t.enable();
      });
    }),
  getContent =
    ((exports.launchAtStartup = launchAtStartup),
    function (t, e) {
      var n = {},
        s = fs.existsSync(
          electron_1.app.getPath("userData") + "/user_interfaces.txt"
        );
      if (t === action_1.Action.RESTORE_DNS) {
        if (!s)
          throw new Error("Attenzione non è stato trovato un file di backup");
        n = JSON.parse(
          fs.readFileSync(
            electron_1.app.getPath("userData") + "/user_interfaces.txt",
            "utf8"
          )
        );
      }
      var r = [],
        o = os_1.networkInterfaces(),
        a =
          (Object.keys(o).forEach(function (e) {
            o[e].find(function (e) {
              return "IPv4" === e.family && !0 === e.internal;
            }) || r.push(e);
          }),
          "");
      return (
        r.forEach(function (e) {
          t === action_1.Action.RESET_DNS
            ? (a +=
                '\n        netsh interface ipv4 delete dnsservers "' +
                e +
                '" all\n        netsh interface ipv6 delete dnsservers "' +
                e +
                '" all\n      ')
            : t === action_1.Action.RESTORE_DNS
            ? (exports.appLog(
                "RESTORE_DNS_WIN32",
                "PARSING SYSTEM INTERFACE " + e
              ),
              exports.appLog(
                "RESTORE_DNS_WIN32",
                "savedDns JSON" + n.toString()
              ),
              n[e] &&
                ((a +=
                  '\n        powershell -Command Enable-NetAdapterBinding -Name "' +
                  e +
                  '" -ComponentID ms_tcpip6\n        netsh interface ipv4 delete dnsservers "' +
                  e +
                  '" all\n        netsh interface ipv6 delete dnsservers "' +
                  e +
                  '" all\n      '),
                n[e].dns &&
                  (a +=
                    '\n        netsh interface ipv4 set dnsservers name="' +
                    e +
                    '" source=static address="' +
                    n[e].dns[0] +
                    '" validate=no\n        netsh interface ipv4 add dnsservers name="' +
                    e +
                    '" address="' +
                    n[e].dns[1] +
                    '" validate=no index=2\n        '),
                n[e].dns6) &&
                (a +=
                  '\n        netsh interface ipv6 set dnsservers name="' +
                  e +
                  '" source=static address="' +
                  n[e].dns6[0] +
                  '" validate=no\n        netsh interface ipv6 add dnsservers name="' +
                  e +
                  '" address="' +
                  n[e].dns6[1] +
                  '" validate=no index=2\n        '))
            : t === action_1.Action.SET_DNS &&
              (a +=
                '\n        netsh interface ipv6 delete dnsservers "' +
                e +
                '" all\n        netsh interface ipv4 delete dnsservers "' +
                e +
                '" all\n        netsh interface ipv4 set dnsservers name="' +
                e +
                '" source=static address="' +
                Contants_1.CONFIG.dnsPrimary +
                '" validate=no\n        netsh interface ipv4 add dnsservers name="' +
                e +
                '" address="' +
                Contants_1.CONFIG.dnsSecondary +
                '" validate=no index=2\n        powershell -Command Disable-NetAdapterBinding -Name "' +
                e +
                '" -ComponentID ms_tcpip6\n      ');
        }),
        '@echo off\n  if "%1"=="runas" (\n    cd %~dp0\n    ' +
          (a +=
            "\n    ipconfig /registerdns\n    ipconfig /release\n    ipconfig /renew\n    ipconfig /release6\n    ipconfig /renew6\n    netsh winsock reset\n  ") +
          '\n    exit\n  ) else (\n    PowerShell Start -File "cmd \'/K "' +
          electron_1.app.getAppPath() +
          "/" +
          e +
          '" runas\'" -Verb RunAs\n  )'
      );
    }),
  isVpnRunningWindows =
    ((exports.getContent = getContent),
    function (e) {
      exports.appLog("CHECK_VPN_WIN32", "Check VPN Status");
      try {
        child_process_1.execSync(e + "\\checkVpn.vbs");
        return exports.appLog("CHECK_VPN_WIN32", "VPN IS RUNNING"), !0;
      } catch (e) {
        return exports.appLog("CHECK_VPN_WIN32", "VPN IS NOT RUNNING"), !1;
      }
    }),
  checkDns =
    ((exports.isVpnRunningWindows = isVpnRunningWindows),
    function (e, t, n) {
      var s = !1;
      switch (
        (e = void 0 !== e ? e : Contants_1.CONFIG.platform.toLowerCase())
      ) {
        case "win32":
          exports.appLog("CHECK_DNS_WIN32"), (s = checkDnsWindows(t, n));
          break;
        case "darwin":
          exports.appLog("CHECK_DNS_OSX"),
            (s = checkDnsOsx()),
            exports.appLog("CHECK_DNS_OSX returned " + s);
          break;
        case "linux":
          exports.appLog("CHECK_DNS_LINUX"), (s = checkDnsLinux());
      }
      return s;
    });
function checkDnsOsx() {
  var r = !1,
    e = exports.getInterfacesOsx();
  return (
    Array.isArray(e) &&
      (exports.appLog("CHECK_DNS_OSX", "WE HAVE MULTIPLE INTERFACES"),
      e.forEach(function (e, t, n) {
        var s;
        "" != e.trim() &&
          (exports.appLog("CHECK_DNS_OSX", "INTERFACE: " + e.trim()),
          (e = child_process_1.execSync(
            'networksetup -getdnsservers "' + e.trim() + '"'
          )),
          exports.appLog("CHECK_DNS_OSX", "INTERFACE DNS: " + e.toString()),
          (s = -1 < e.toString().indexOf(Contants_1.CONFIG.dnsPrimary)),
          (e = -1 < e.toString().indexOf(Contants_1.CONFIG.dnsSecondary)),
          exports.appLog("CHECK_DNS_OSX", "FOUND_DNS1 " + s),
          exports.appLog("CHECK_DNS_OSX", "FOUND_DNS2 " + e),
          s) &&
          e &&
          (r = !0);
      })),
    r
  );
}
function checkDnsLinux() {
  var e,
    t,
    n,
    s = !1;
  try {
    ("centos" === Contants_1.CONFIG.platformName.toLowerCase() ||
      -1 < Contants_1.CONFIG.platformName.toLowerCase().indexOf("debian")) &&
      ((e = fs.readFileSync("/etc/resolv.conf", "utf8")),
      exports.appLog("CHECK_DNS_LINUX - Nameservers: " + e.toString()),
      (t = -1 < e.toString().indexOf(Contants_1.CONFIG.dnsPrimary)),
      (n = -1 < e.toString().indexOf(Contants_1.CONFIG.dnsSecondary)),
      exports.appLog("CHECK_DNS_LINUX", "FOUND_DNS1 " + t),
      exports.appLog("CHECK_DNS_LINUX", "FOUND_DNS2 " + n),
      t) &&
      n &&
      (s = !0),
      "ubuntu" === Contants_1.CONFIG.platformName.toLowerCase() &&
        ((e = child_process_1.execSync(
          'LC_ALL=C resolvectl status | grep "DNS Servers"'
        )),
        exports.appLog("CHECK_DNS_LINUX_UBUNTU", e.toString()),
        (t = -1 < e.toString().indexOf(Contants_1.CONFIG.dnsPrimary)),
        (n = -1 < e.toString().indexOf(Contants_1.CONFIG.dnsSecondary)),
        exports.appLog("CHECK_DNS_LINUX_UBUNTU", "FOUND_DNS1 " + t),
        exports.appLog("CHECK_DNS_LINUX_UBUNTU", "FOUND_DNS2 " + n),
        t) &&
        n &&
        (s = !0);
  } catch (e) {
    console.error(e);
  }
  return s;
}
function checkAsyncDnsWindows(a, i) {
  child_process_1.exec(
    'PowerShell "Get-NetRoute | % { Process { If (!$_.RouteMetric) { $_.ifIndex } } }"',
    function (e, t, n) {
      if (e) console.error("exec error: " + e);
      else {
        exports.appLog("INTERFACE_FOUNDS", t.toString());
        var s = t.toString().split(os.EOL);
        if (Array.isArray(s)) {
          exports.appLog("INTERFACE_FOUNDS", "WE HAVE MULTIPLE INTERFACES");
          for (
            var r = s
                .filter(function (e, t) {
                  return s.indexOf(e) == t;
                })
                .filter(function (e) {
                  return "" !== e;
                }),
              o = (a.send({ init: !0, rid: i, totalCount: r.length }), 0);
            o < r.length;
            o++
          )
            !(function (e) {
              var o = r[e];
              "" !== o.trim() &&
                child_process_1.exec(
                  'PowerShell Get-DnsClientServerAddress -AddressFamily "IPv4" -InterfaceIndex ' +
                    o,
                  function (e, t, n) {
                    exports.appLog(
                      "INTERFACE_FOUNDS",
                      "CHECK DNS OF INTERFACE " + o
                    );
                    var s =
                        -1 < t.toString().indexOf(Contants_1.CONFIG.dnsPrimary),
                      r =
                        -1 <
                        t.toString().indexOf(Contants_1.CONFIG.dnsSecondary);
                    exports.appLog("result: ", t.toString()),
                      exports.appLog("FOUND_DNS1 ", s + ""),
                      exports.appLog("FOUND_DNS2 ", r + ""),
                      s && r && 0,
                      a.send({ rid: i, dnsFound: s && r });
                  }
                );
            })(o);
        } else
          child_process_1.exec(
            'PowerShell Get-DnsClientServerAddress -AddressFamily "IPv4" -InterfaceIndex ' +
              s,
            function (e, t, n) {
              var s = -1 < t.toString().indexOf(Contants_1.CONFIG.dnsPrimary),
                r = -1 < t.toString().indexOf(Contants_1.CONFIG.dnsSecondary);
              exports.appLog("result: ", t.toString()),
                exports.appLog("FOUND_DNS1 ", s + ""),
                exports.appLog("FOUND_DNS2 ", r + ""),
                a.send({ oneInterface: !0, rid: i, dnsFound: s && r });
            }
          );
      }
    }
  );
}
function checkDnsWindows(o, a) {
  var e,
    t,
    i = !1,
    n =
      ((o = void 0 !== o ? o : Contants_1.CONFIG.dnsPrimary),
      (a = void 0 !== a ? a : Contants_1.CONFIG.dnsSecondary),
      exports.appLog("dnsSecondary ", a),
      exports.appLog("dnsPrimary ", o),
      child_process_1.execSync(
        'PowerShell "Get-NetRoute | % { Process { If (!$_.RouteMetric) { $_.ifIndex } } }"'
      )),
    s =
      (exports.appLog("INTERFACE_FOUNDS", n.toString()),
      n.toString().split(os.EOL));
  return (
    Array.isArray(s)
      ? (exports.appLog("INTERFACE_FOUNDS", "WE HAVE MULTIPLE INTERFACES"),
        s
          .filter(function (e, t) {
            return s.indexOf(e) == t;
          })
          .filter(function (e) {
            return "" !== e;
          })
          .forEach(function (e, t, n) {
            var s, r;
            "" != e.trim() &&
              (exports.appLog(
                "INTERFACE_FOUNDS",
                "CHECK DNS OF INTERFACE " + e
              ),
              (s =
                -1 <
                (e = child_process_1.execSync(
                  'PowerShell Get-DnsClientServerAddress -AddressFamily "IPv4" -InterfaceIndex ' +
                    e
                ))
                  .toString()
                  .indexOf(o)),
              (r = -1 < e.toString().indexOf(a)),
              exports.appLog("result: ", e.toString()),
              exports.appLog("FOUND_DNS1 ", s + ""),
              exports.appLog("FOUND_DNS2 ", r + ""),
              s) &&
              r &&
              (i = !0);
          }))
      : ((e =
          -1 <
          (n = child_process_1.execSync(
            'PowerShell Get-DnsClientServerAddress -AddressFamily "IPv4" -InterfaceIndex ' +
              s
          ))
            .toString()
            .indexOf(Contants_1.CONFIG.dnsPrimary)),
        (t = -1 < n.toString().indexOf(Contants_1.CONFIG.dnsSecondary)),
        exports.appLog("result: ", n.toString()),
        exports.appLog("FOUND_DNS1 ", e),
        exports.appLog("FOUND_DNS2 ", t),
        e && t && (i = !0)),
    i
  );
}
(exports.checkDns = checkDns),
  (exports.checkDnsOsx = checkDnsOsx),
  (exports.checkDnsLinux = checkDnsLinux),
  (exports.checkAsyncDnsWindows = checkAsyncDnsWindows),
  (exports.checkDnsWindows = checkDnsWindows);
var checkProcess = function (e, t) {
  switch ((t = void 0 !== t ? t : Contants_1.CONFIG.platform.toLowerCase())) {
    case "win32":
      return exports.appLog("CHECK_PROCESS_WIN32"), checkProcessWindows(e);
    case "darwin":
      return exports.appLog("CHECK_PROCESS_OSX"), checkProcessOsx(e);
    case "linux":
      return exports.appLog("CHECK_PROCESS_LINUX"), checkProcessLinux(e);
  }
};
function checkProcessOsx(e) {
  return (
    -1 <
    child_process_1
      .execSync("ps aux")
      .toString()
      .toLowerCase()
      .indexOf("" + e.toLowerCase())
  );
}
function checkProcessLinux(e) {
  return (
    -1 <
    child_process_1
      .execSync("ps wauwx")
      .toString()
      .toLowerCase()
      .indexOf("" + e.toLowerCase())
  );
}
function checkProcessWindows(e) {
  return (
    -1 <
    child_process_1
      .execSync(
        'tasklist /nh /FI "ImageName eq ' + e + '" /FI "Status eq Running"'
      )
      .toString()
      .toLowerCase()
      .indexOf("" + e.toLowerCase())
  );
}
function checkAsyncProcessWindows(e) {
  return (
    -1 <
    child_process_1
      .execSync(
        'tasklist /nh /FI "ImageName eq ' + e + '" /FI "Status eq Running"'
      )
      .toString()
      .toLowerCase()
      .indexOf("" + e.toLowerCase())
  );
}
(exports.checkProcess = checkProcess),
  (exports.checkProcessOsx = checkProcessOsx),
  (exports.checkProcessLinux = checkProcessLinux),
  (exports.checkProcessWindows = checkProcessWindows),
  (exports.checkAsyncProcessWindows = checkAsyncProcessWindows);
var killProcess = function (e) {
    switch (Contants_1.CONFIG.platform.toLowerCase()) {
      case "win32":
        return (
          exports.appLog("KILL_PROCESS_WIN32"), exports.killProcessWindows(e)
        );
      case "darwin":
        return exports.appLog("KILL_PROCESS_OSX"), exports.killProcessOsx(e);
      case "linux":
        return (
          exports.appLog("KILL_PROCESS_LINUX"), exports.killProcessLinux(e)
        );
    }
  },
  killProcessOsx = ((exports.killProcess = killProcess), function (e) {}),
  killProcessLinux =
    ((exports.killProcessOsx = killProcessOsx), function (e) {}),
  killProcessWindows =
    ((exports.killProcessLinux = killProcessLinux),
    function (e) {
      return child_process_1
        .execSync("echo ho provato a chiudere un programma e ho fallito miseramente lol")
        .toString()
        .toLowerCase();
    }),
  checkUser =
    ((exports.killProcessWindows = killProcessWindows),
    function (t) {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (e) {
          switch (e.label) {
            case 0:
              return [
                4,
                t.webContents.executeJavaScript(
                  'localStorage.getItem("username");',
                  !0
                ),
              ];
            case 1:
              return [2, e.sent()];
          }
        });
      });
    }),
  checkFirstFirstLogin =
    ((exports.checkUser = checkUser),
    function (t) {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (e) {
          switch (e.label) {
            case 0:
              return [
                4,
                t.webContents.executeJavaScript(
                  'localStorage.getItem("firstLogin");',
                  !0
                ),
              ];
            case 1:
              return [2, e.sent()];
          }
        });
      });
    }),
  logoutUser =
    ((exports.checkFirstFirstLogin = checkFirstFirstLogin),
    function (t) {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (e) {
          switch (e.label) {
            case 0:
              return [
                4,
                t.webContents.executeJavaScript(
                  'localStorage.removeItem("username");localStorage.removeItem("logged");',
                  !0
                ),
              ];
            case 1:
              return [2, e.sent()];
          }
        });
      });
    }),
  showErrorDialog =
    ((exports.logoutUser = logoutUser),
    function (e, t) {
      electron_1.dialog.showMessageBox(null, { title: e, message: t });
    }),
  appLog =
    ((exports.showErrorDialog = showErrorDialog),
    function (e, t, n) {
      exports.isDevMode &&
        (t
          ? (n &&
              n.webContents.send("WEBAPP", {
                action: action_1.Action.LOG,
                data: t,
              }),
            console.log(e, t))
          : (n &&
              n.webContents.send("WEBAPP", {
                action: action_1.Action.LOG,
                data: e,
              }),
            console.log(e)));
    });
exports.appLog = appLog;
