// Copyright (C) 2022 MCSManager <mcsmanager-dev@outlook.com>

export const TYPE_UNIVERSAL = "universal";
export const TYPE_WEB_SHELL = "universal/web_shell";
export const TYPE_MINECRAFT_MCDR = "universal/mcdr";
export const TYPE_MINECRAFT_JAVA = "minecraft/java";
export const TYPE_MINECRAFT_BUKKIT = "minecraft/java/bukkit";
export const TYPE_MINECRAFT_SPIGOT = "minecraft/java/spigot";
export const TYPE_MINECRAFT_PAPER = "minecraft/java/paper";
export const TYPE_MINECRAFT_FORGE = "minecraft/java/forge";
export const TYPE_MINECRAFT_FABRIC = "minecraft/java/fabric";
export const TYPE_MINECRAFT_BUNGEECORD = "minecraft/java/bungeecord";
export const TYPE_MINECRAFT_VELOCITY = "minecraft/java/velocity";
export const TYPE_MINECRAFT_GEYSER = "minecraft/java/geyser";
export const TYPE_MINECRAFT_SPONGE = "minecraft/java/sponge";
export const TYPE_MINECRAFT_MOHIST = "minecraft/java/mohist";
export const TYPE_MINECRAFT_BEDROCK = "minecraft/bedrock";
export const TYPE_MINECRAFT_BDS = "minecraft/bedrock/bds";
export const TYPE_MINECRAFT_NUKKIT = "minecraft/bedrock/nukkit";
export const TYPE_STEAM_SERVER_UNIVERSAL = "steam/universal";
export const TYPE_BOT_GOCQHTTP = "bot/go-cqhttp";
export const TYPE_BOT_QSIGN = "bot/qsign";

// Front-end selectable type list
const INSTANCE_TYPE_TRANSLATION = {};
INSTANCE_TYPE_TRANSLATION[TYPE_UNIVERSAL] = "General console program";
INSTANCE_TYPE_TRANSLATION[TYPE_STEAM_SERVER_UNIVERSAL] = "Steam Game Server";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_JAVA] = "MC Java Edition";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_BEDROCK] = "MC Bedrock Edition";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_SPIGOT] = "MC Spigot";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_PAPER] = "MC Paper";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_BUNGEECORD] = "MC BungeeCord";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_VELOCITY] = "MC Velocity";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_BDS] = "MC Bedrock";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_SPONGE] = "MC Sponge";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_FORGE] = "MC Forge";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_FABRIC] = "MC Fabric";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_BUKKIT] = "MC Bukkit";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_GEYSER] = "MC Geyser";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_MCDR] = "MC MCDR";
INSTANCE_TYPE_TRANSLATION[TYPE_WEB_SHELL] = "Web Shell";
INSTANCE_TYPE_TRANSLATION[TYPE_BOT_QSIGN] = "BOT QSIGN";
INSTANCE_TYPE_TRANSLATION[TYPE_BOT_GOCQHTTP] = "BOT GO-CQHTTP";

// Different types of specific configuration files
const INSTANCE_TYPE_DEF_CONFIG = {
  [TYPE_MINECRAFT_BUNGEECORD]: {
    stopCommand: "end",
    configEntryName: window.$t("service.instance_type.001")
  },
  [TYPE_MINECRAFT_VELOCITY]: {
    stopCommand: "end",
    configEntryName: window.$t("service.instance_type.002")
  },
  [TYPE_STEAM_SERVER_UNIVERSAL]: {
    stopCommand: "^c"
  },
  [TYPE_WEB_SHELL]: {
    stopCommand: "^c"
  },
  [TYPE_UNIVERSAL]: {
    stopCommand: "^c"
  },
  [TYPE_MINECRAFT_JAVA]: {
    stopCommand: "stop",
    getConfigEntryName: () => window.$t("service.instance_type.002")
  },
  [TYPE_MINECRAFT_BEDROCK]: {
    stopCommand: "stop",
    getConfigEntryName: () => window.$t("service.instance_type.002")
  },
  [TYPE_MINECRAFT_SPIGOT]: {
    stopCommand: "stop",
    getConfigEntryName: () => window.$t("service.instance_type.003")
  },
  [TYPE_MINECRAFT_PAPER]: {
    stopCommand: "stop",
    getConfigEntryName: () => window.$t("service.instance_type.004")
  },
  [TYPE_MINECRAFT_BDS]: {
    stopCommand: "stop",
    getConfigEntryName: () => window.$t("service.instance_type.005")
  },
  [TYPE_MINECRAFT_SPONGE]: {
    stopCommand: "stop",
    getConfigEntryName: () => window.$t("service.instance_type.006")
  },
  [TYPE_MINECRAFT_FORGE]: {
    stopCommand: "stop",
    getConfigEntryName: () => window.$t("service.instance_type.007")
  },
  [TYPE_MINECRAFT_FABRIC]: {
    stopCommand: "stop",
    getConfigEntryName: () => window.$t("service.instance_type.008")
  },
  [TYPE_MINECRAFT_BUKKIT]: {
    stopCommand: "stop",
    getConfigEntryName: () => window.$t("service.instance_type.002")
  },
  [TYPE_MINECRAFT_GEYSER]: {
    stopCommand: "geyser stop",
    getConfigEntryName: () => window.$t("service.instance_type.002")
  },
  [TYPE_MINECRAFT_MCDR]: {
    stopCommand: "stop",
    getConfigEntryName: () => window.$t("service.instance_type.009")
  },
  [TYPE_BOT_GOCQHTTP]: {
    stopCommand: "^c",
    getConfigEntryName: () => window.$t("service.instance_type.002")
  },
  [TYPE_BOT_QSIGN]: {
    stopCommand: "^c^c",
    getConfigEntryName: () => window.$t("service.instance_type.002")
  }
};

export { INSTANCE_TYPE_TRANSLATION, INSTANCE_TYPE_DEF_CONFIG };
