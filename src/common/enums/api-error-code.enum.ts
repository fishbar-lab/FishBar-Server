export enum ApiErrorCode {
    TIMEOUT = -1, // 系统繁忙
    SUCCESS = 0, // 成功

    SN_ERROR = 302311, // 序列号错误
    SN_INVALID = 302312, // 序列号无效
    OTHER = 302314, // 其他错误
    UNBALANCE = 302303, // 余额不足
    NEEDKEY = 201000, // 需要key
    MAINBALANCELOW = 201001, // 主账户余额不足
    SUBBALANCELOW = 201002, // 子账户余额不足
    NOTSUPPORT = 201003, // 不支持该查询
    INVALIDKEY = 201004, // 无效的key
    USERISNOTEXISTS = 201005, // 用户不存在
}
