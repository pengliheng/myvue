module.exports = {
  // service port
  port: 80,

  // jwt encryption secret
  secret: 'jwt',

  // default Room
  defaultRoom: 'MoonLight',

  // qiniu CDN config.
  // 七牛CDN配置
  accessKey: 'qiniu_access_key',
  secretKey: 'qiniu_secret_key',
  bucket: 'bucket_name',
  bucketUrl: 'bucket_url',

  // Maximum message length
  // 消息最大长度
  maxMessageLength: 1024,

  // Maximum number of groups that can be created by each user
  // 每个用户最多可以创建的群组个数
  maxGroupNumber: 2,

  // New users use random avatars. You need to install ImageMagick first
  // 新建用户使用随机头像, 需要先安装ImageMagick
  useRandomAvatar: false,

  // Default group avatar url.
  // 默认群组头像链接
  defaultGroupAvatar: '/static/default_group_avatar.png',
  // Default user avatar url. If use random avatar, you do not need this configuration
  // 默认用户头像链接, 如果使用随机头像则不需要该项配置
  defaultUserAvatar: '/static/default_user_avatar.png',
};
