<!--
  Copyright (C) 2022 MCSManager <mcsmanager-dev@outlook.com>
-->

<template>
  <!-- 当前文件的说明，请根据需要自定义修改文字 -->
  <LineOption :custom="true">
    <template #default>
      <div class="sub-title" v-iszh>
        <div class="sub-title">关于配置兼容与翻译</div>
        <div class="sub-title-info">
          此界面由开源社区开发者开发与翻译，若翻译发现错误可前往开源社区进行反馈。配置文件部分设置因版本和服务端类型不同会有些许变化，某些配置文件子元素过于复杂，可能会导致配置项值无法正常显示，如遇到不正常的配置项值切勿进行修改。若对配置文件要进行更为详细的配置，建议前往文件在线管理功能进行文件编辑。
        </div>
      </div>
      <div class="sub-title">
        <div class="sub-title">{{this.$t("processConfig.introduction.common.aboutConfig")}}</div>
        <div class="sub-title-info">
          {{this.$t("processConfig.introduction.gocqYml.infoLong")}}
        </div>
      </div>
    </template>
  </LineOption>

  <div v-if="modelValue">
    <!-- 根据一层 Map 对象遍历所有选项 -->
    <div v-for="(item, index) in config" :key="index">
      <!-- 选项标题与选项传值,组件会自动判断其值类型采用不同组件 -->
      <LineOption :option-value="config" :option-key="index">
        <!-- 选项标题 -->
        <template #title>{{ index }}</template>
        <!-- 选项中文解释 -->
        <template #info>{{ descriptionByTitle(description, index) }}</template>
      </LineOption>
    </div>
  </div>
</template>

<script>
import { getDescriptionByTitle, jsonToMap } from "../../app/service/common";
import LineOption from "../LineOption";
import LineOptionList from "../LineOptionList";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { LineOption, LineOptionList },
  props: {
    modelValue: Object
  },
  async mounted() {
    // 将多子节点JSON对象转为无子对象的一层 Map 对象
    this.config = jsonToMap(this.modelValue);
  },
  methods: {
    descriptionByTitle(...p) {
      // 利用已转换到一层 Map 对象 Key 值获取来自多子节点的 JSON 对象具体 Value
      return getDescriptionByTitle(...p);
    }
  },
  data() {
    return {
      config: null,
      description: {
      "account": 
        {
          "uin": this.$t("processConfig.gocqYml.account.uin"),
          "password": this.$t("processConfig.gocqYml.account.password"),
          "encrypt": this.$t("processConfig.gocqYml.account.encrypt"),
          "status": this.$t("processConfig.gocqYml.account.status"),
          "relogin": {
            "delay": this.$t("processConfig.gocqYml.account.relogin.delay"),
            "interval": this.$t("processConfig.gocqYml.account.relogin.interval"),
            "max-times": this.$t("processConfig.gocqYml.account.relogin.max-times"),
          },
          "use-sso-address": this.$t("processConfig.gocqYml.account.use-sso-address"),
          "allow-temp-session": this.$t("processConfig.gocqYml.account.allow-temp-session"),
          "sign-servers":{
              "0": {
              "url": this.$t("processConfig.gocqYml.account.sign-servers.0.url"),
              "key": this.$t("processConfig.gocqYml.account.sign-servers.0.key"),
              "authorization": this.$t("processConfig.gocqYml.account.sign-servers.0.authorization"),
              },
              "1": {
              "url": this.$t("processConfig.gocqYml.account.sign-servers.1.url"),
              "key": this.$t("processConfig.gocqYml.account.sign-servers.1.key"),
              "authorization": this.$t("processConfig.gocqYml.account.sign-servers.1.authorization"),
              }
            },
          "rule-change-sign-server": this.$t("processConfig.gocqYml.account.rule-change-sign-server"),
          "max-check-count": this.$t("processConfig.gocqYml.account.max-check-count"),
          "sign-server-timeout": this.$t("processConfig.gocqYml.account.sign-server-timeout"),
          "is-below-110": this.$t("processConfig.gocqYml.account.is-below-110"),
          "auto-register": this.$t("processConfig.gocqYml.account.auto-register"),
          "auto-refresh-token": this.$t("processConfig.gocqYml.account.auto-refresh-token"),
          "refresh-interval": this.$t("processConfig.gocqYml.account.refresh-interval")
        }
      ,
      "heartbeat": {
        "interval": this.$t("processConfig.gocqYml.heartbeat.interval")
      },
      "message": {
        "post-format": this.$t("processConfig.gocqYml.message.post-format"),
        "ignore-invalid-cqcode": this.$t("processConfig.gocqYml.message.ignore-invalid-cqcode"),
        "force-fragment": this.$t("processConfig.gocqYml.message.force-fragment"),
        "fix-url": this.$t("processConfig.gocqYml.message.fix-url"),
        "proxy-rewrite": this.$t("processConfig.gocqYml.message.proxy-rewrite"),
        "report-self-message": this.$t("processConfig.gocqYml.message.report-self-message"),
        "remove-reply-at": this.$t("processConfig.gocqYml.message.remove-reply-at"),
        "extra-reply-data": this.$t("processConfig.gocqYml.message.extra-reply-data"),
        "skip-mime-scan": this.$t("processConfig.gocqYml.message.skip-mime-scan"),
        "convert-webp-image": this.$t("processConfig.gocqYml.message.convert-webp-image"),
        "http-timeout": this.$t("processConfig.gocqYml.message.http-timeout"),
      },
      "output": {
        "log-level": this.$t("processConfig.gocqYml.output.log-level"),
        "log-aging": this.$t("processConfig.gocqYml.output.log-aging"),
        "log-force-new": this.$t("processConfig.gocqYml.output.log-force-new"),
        "log-colorful": this.$t("processConfig.gocqYml.output.log-colorful"),
        "debug": this.$t("processConfig.gocqYml.output.debug")
      },
      "default-middlewares": {
        "access-token": this.$t("processConfig.gocqYml.default-middlewares.access-token"),
        "filter": this.$t("processConfig.gocqYml.default-middlewares.filter"),
        "rate-limit":{
          "enabled": this.$t("processConfig.gocqYml.default-middlewares.rate-limit.enabled"),
          "frequency": this.$t("processConfig.gocqYml.default-middlewares.rate-limit.frequency"),
          "bucket": this.$t("processConfig.gocqYml.default-middlewares.rate-limit.bucket")
        }
      },
      "database": {
        "leveldb": this.$t("processConfig.gocqYml.database.leveldb"),
        "sqlite3": {
          "enable": this.$t("processConfig.gocqYml.database.sqlite3.enable"),
          "cachettl": this.$t("processConfig.gocqYml.database.sqlite3.cachettl")
        }
      },
      "servers": {
          "0": { 
          "http": {
          "address": this.$t("processConfig.gocqYml.servers.0.http.address"),
          "version": this.$t("processConfig.gocqYml.servers.0.http.version"),
          "timeout": this.$t("processConfig.gocqYml.servers.0.http.timeout"),
          "long-polling": {
            "enabled": this.$t("processConfig.gocqYml.servers.0.http.long-polling.enabled"),
            "max-queue-size": this.$t("processConfig.gocqYml.servers.0.http.long-polling.max-queue-size")
            },
          "middlewares": {
            "<<": this.$t("processConfig.gocqYml.servers.0.http.middlewares.<<")
            },
          "post": {
             "0": {
                "url": this.$t("processConfig.gocqYml.servers.0.http.post.0.url"),
                "secret": this.$t("processConfig.gocqYml.servers.0.http.post.0.secret"),
                "max-retries": this.$t("processConfig.gocqYml.servers.0.http.post.0.max-retries"),
                "retries-interval": this.$t("processConfig.gocqYml.servers.0.http.post.0.retries-interval")
              },
              "1": {
                "url": this.$t("processConfig.gocqYml.servers.0.http.post.1.url"),
                "secret": this.$t("processConfig.gocqYml.servers.0.http.post.1.secret"),
                "max-retries": this.$t("processConfig.gocqYml.servers.0.http.post.1.max-retries"),
                "retries-interval": this.$t("processConfig.gocqYml.servers.0.http.post.1.retries-interval")
              },
              "2": {
                "url": this.$t("processConfig.gocqYml.servers.0.http.post.2.url"),
                "secret": this.$t("processConfig.gocqYml.servers.0.http.post.2.secret"),
                "max-retries": this.$t("processConfig.gocqYml.servers.0.http.post.2.max-retries"),
                "retries-interval": this.$t("processConfig.gocqYml.servers.0.http.post.2.retries-interval")
              }
            }
          }
        },
        "1": { 
          "lambda": {
            "type": this.$t("processConfig.gocqYml.servers.1.lambda.type"),
            "middlewares": {
              "<<": this.$t("processConfig.gocqYml.servers.1.lambda.middlewares.<<")
            }
          }
        },
        "2": { 
          "ws": {
        "address": this.$t("processConfig.gocqYml.servers.2.ws.address"),
        "middlewares": {
          "<<": this.$t("processConfig.gocqYml.servers.2.ws.middlewares.<<")
        }
          }
        },
        "3": { 
          "ws-reverse":{
            "universal": this.$t("processConfig.gocqYml.servers.3.ws-reverse.universal"),
            "api": this.$t("processConfig.gocqYml.servers.3.ws-reverse.api"),
            "event": this.$t("processConfig.gocqYml.servers.3.ws-reverse.event"),
            "reconnect-interval": this.$t("processConfig.gocqYml.servers.3.ws-reverse.reconnect-interval"),
            "middlewares": {
              "<<": this.$t("processConfig.gocqYml.servers.3.ws-reverse.middlewares.<<")
            }
          }
        }
      }
    }
    };
  }
};
</script>
