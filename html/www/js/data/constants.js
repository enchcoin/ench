/******************************************************************************
 * Copyright © 2013-2016 The Nxt Core Developers.                             *
 * Copyright © 2016 Jelurida IP B.V.                                          *
 *                                                                            *
 * See the LICENSE.txt file at the top-level directory of this distribution   *
 * for licensing information.                                                 *
 *                                                                            *
 * Unless otherwise agreed in a custom licensing agreement with Jelurida B.V.,*
 * no part of the Nxt software, including this file, may be copied, modified, *
 * propagated, or distributed except according to the terms contained in the  *
 * LICENSE.txt file.                                                          *
 *                                                                            *
 * Removal or modification of this copyright notice is prohibited.            *
 *                                                                            *
 ******************************************************************************/

NRS.constants.SERVER = {
    "transactionSubTypes": {
        "ReserveClaim": {
            "isPhasable": true,
            "subtype": 2,
            "mustHaveRecipient": false,
            "name": "ReserveClaim",
            "canHaveRecipient": false,
            "type": 5,
            "isPhasingSafe": false
        },
        "AssetIssuance": {
            "isPhasable": true,
            "subtype": 0,
            "mustHaveRecipient": false,
            "name": "AssetIssuance",
            "canHaveRecipient": false,
            "type": 2,
            "isPhasingSafe": true
        },
        "PhasingVoteCasting": {
            "isPhasable": true,
            "subtype": 9,
            "mustHaveRecipient": false,
            "name": "PhasingVoteCasting",
            "canHaveRecipient": false,
            "type": 1,
            "isPhasingSafe": true
        },
        "CurrencyIssuance": {
            "isPhasable": true,
            "subtype": 0,
            "mustHaveRecipient": false,
            "name": "CurrencyIssuance",
            "canHaveRecipient": false,
            "type": 5,
            "isPhasingSafe": false
        },
        "ShufflingRecipients": {
            "isPhasable": false,
            "subtype": 3,
            "mustHaveRecipient": false,
            "name": "ShufflingRecipients",
            "canHaveRecipient": false,
            "type": 7,
            "isPhasingSafe": false
        },
        "PublishExchangeOffer": {
            "isPhasable": true,
            "subtype": 4,
            "mustHaveRecipient": false,
            "name": "PublishExchangeOffer",
            "canHaveRecipient": false,
            "type": 5,
            "isPhasingSafe": false
        },
        "TaggedDataUpload": {
            "isPhasable": false,
            "subtype": 0,
            "mustHaveRecipient": false,
            "name": "TaggedDataUpload",
            "canHaveRecipient": false,
            "type": 6,
            "isPhasingSafe": false
        },
        "ReserveIncrease": {
            "isPhasable": true,
            "subtype": 1,
            "mustHaveRecipient": false,
            "name": "ReserveIncrease",
            "canHaveRecipient": false,
            "type": 5,
            "isPhasingSafe": false
        },
        "ArbitraryMessage": {
            "isPhasable": true,
            "subtype": 0,
            "mustHaveRecipient": false,
            "name": "ArbitraryMessage",
            "canHaveRecipient": true,
            "type": 1,
            "isPhasingSafe": false
        },
        "DigitalGoodsPriceChange": {
            "isPhasable": true,
            "subtype": 2,
            "mustHaveRecipient": false,
            "name": "DigitalGoodsPriceChange",
            "canHaveRecipient": false,
            "type": 3,
            "isPhasingSafe": false
        },
        "DigitalGoodsFeedback": {
            "isPhasable": true,
            "subtype": 6,
            "mustHaveRecipient": true,
            "name": "DigitalGoodsFeedback",
            "canHaveRecipient": true,
            "type": 3,
            "isPhasingSafe": false
        },
        "ExchangeBuy": {
            "isPhasable": true,
            "subtype": 5,
            "mustHaveRecipient": false,
            "name": "ExchangeBuy",
            "canHaveRecipient": false,
            "type": 5,
            "isPhasingSafe": false
        },
        "VoteCasting": {
            "isPhasable": true,
            "subtype": 3,
            "mustHaveRecipient": false,
            "name": "VoteCasting",
            "canHaveRecipient": false,
            "type": 1,
            "isPhasingSafe": false
        },
        "SetPhasingOnly": {
            "isPhasable": true,
            "subtype": 1,
            "mustHaveRecipient": false,
            "name": "SetPhasingOnly",
            "canHaveRecipient": false,
            "type": 4,
            "isPhasingSafe": false
        },
        "CurrencyMinting": {
            "isPhasable": true,
            "subtype": 7,
            "mustHaveRecipient": false,
            "name": "CurrencyMinting",
            "canHaveRecipient": false,
            "type": 5,
            "isPhasingSafe": false
        },
        "AliasAssignment": {
            "isPhasable": true,
            "subtype": 1,
            "mustHaveRecipient": false,
            "name": "AliasAssignment",
            "canHaveRecipient": false,
            "type": 1,
            "isPhasingSafe": false
        },
        "AliasDelete": {
            "isPhasable": true,
            "subtype": 8,
            "mustHaveRecipient": false,
            "name": "AliasDelete",
            "canHaveRecipient": false,
            "type": 1,
            "isPhasingSafe": false
        },
        "BidOrderCancellation": {
            "isPhasable": true,
            "subtype": 5,
            "mustHaveRecipient": false,
            "name": "BidOrderCancellation",
            "canHaveRecipient": false,
            "type": 2,
            "isPhasingSafe": true
        },
        "AssetDelete": {
            "isPhasable": true,
            "subtype": 7,
            "mustHaveRecipient": false,
            "name": "AssetDelete",
            "canHaveRecipient": false,
            "type": 2,
            "isPhasingSafe": true
        },
        "ShufflingProcessing": {
            "isPhasable": false,
            "subtype": 2,
            "mustHaveRecipient": false,
            "name": "ShufflingProcessing",
            "canHaveRecipient": false,
            "type": 7,
            "isPhasingSafe": false
        },
        "DigitalGoodsListing": {
            "isPhasable": true,
            "subtype": 0,
            "mustHaveRecipient": false,
            "name": "DigitalGoodsListing",
            "canHaveRecipient": false,
            "type": 3,
            "isPhasingSafe": true
        },
        "AskOrderCancellation": {
            "isPhasable": true,
            "subtype": 4,
            "mustHaveRecipient": false,
            "name": "AskOrderCancellation",
            "canHaveRecipient": false,
            "type": 2,
            "isPhasingSafe": true
        },
        "DigitalGoodsPurchase": {
            "isPhasable": true,
            "subtype": 4,
            "mustHaveRecipient": true,
            "name": "DigitalGoodsPurchase",
            "canHaveRecipient": true,
            "type": 3,
            "isPhasingSafe": false
        },
        "AccountInfo": {
            "isPhasable": true,
            "subtype": 5,
            "mustHaveRecipient": false,
            "name": "AccountInfo",
            "canHaveRecipient": false,
            "type": 1,
            "isPhasingSafe": true
        },
        "CurrencyTransfer": {
            "isPhasable": true,
            "subtype": 3,
            "mustHaveRecipient": true,
            "name": "CurrencyTransfer",
            "canHaveRecipient": true,
            "type": 5,
            "isPhasingSafe": false
        },
        "HubAnnouncement": {
            "isPhasable": true,
            "subtype": 4,
            "mustHaveRecipient": false,
            "name": "HubAnnouncement",
            "canHaveRecipient": false,
            "type": 1,
            "isPhasingSafe": true
        },
        "DigitalGoodsQuantityChange": {
            "isPhasable": true,
            "subtype": 3,
            "mustHaveRecipient": false,
            "name": "DigitalGoodsQuantityChange",
            "canHaveRecipient": false,
            "type": 3,
            "isPhasingSafe": false
        },
        "DigitalGoodsRefund": {
            "isPhasable": true,
            "subtype": 7,
            "mustHaveRecipient": true,
            "name": "DigitalGoodsRefund",
            "canHaveRecipient": true,
            "type": 3,
            "isPhasingSafe": false
        },
        "AssetTransfer": {
            "isPhasable": true,
            "subtype": 1,
            "mustHaveRecipient": true,
            "name": "AssetTransfer",
            "canHaveRecipient": true,
            "type": 2,
            "isPhasingSafe": true
        },
        "AliasSell": {
            "isPhasable": true,
            "subtype": 6,
            "mustHaveRecipient": false,
            "name": "AliasSell",
            "canHaveRecipient": true,
            "type": 1,
            "isPhasingSafe": false
        },
        "AccountProperty": {
            "isPhasable": true,
            "subtype": 10,
            "mustHaveRecipient": true,
            "name": "AccountProperty",
            "canHaveRecipient": true,
            "type": 1,
            "isPhasingSafe": true
        },
        "AccountPropertyDelete": {
            "isPhasable": true,
            "subtype": 11,
            "mustHaveRecipient": true,
            "name": "AccountPropertyDelete",
            "canHaveRecipient": true,
            "type": 1,
            "isPhasingSafe": true
        },
        "AliasBuy": {
            "isPhasable": true,
            "subtype": 7,
            "mustHaveRecipient": true,
            "name": "AliasBuy",
            "canHaveRecipient": true,
            "type": 1,
            "isPhasingSafe": false
        },
        "EffectiveBalanceLeasing": {
            "isPhasable": true,
            "subtype": 0,
            "mustHaveRecipient": true,
            "name": "EffectiveBalanceLeasing",
            "canHaveRecipient": true,
            "type": 4,
            "isPhasingSafe": true
        },
        "ShufflingRegistration": {
            "isPhasable": true,
            "subtype": 1,
            "mustHaveRecipient": false,
            "name": "ShufflingRegistration",
            "canHaveRecipient": false,
            "type": 7,
            "isPhasingSafe": false
        },
        "ShufflingVerification": {
            "isPhasable": false,
            "subtype": 4,
            "mustHaveRecipient": false,
            "name": "ShufflingVerification",
            "canHaveRecipient": false,
            "type": 7,
            "isPhasingSafe": false
        },
        "DividendPayment": {
            "isPhasable": true,
            "subtype": 6,
            "mustHaveRecipient": false,
            "name": "DividendPayment",
            "canHaveRecipient": false,
            "type": 2,
            "isPhasingSafe": false
        },
        "TaggedDataExtend": {
            "isPhasable": false,
            "subtype": 1,
            "mustHaveRecipient": false,
            "name": "TaggedDataExtend",
            "canHaveRecipient": false,
            "type": 6,
            "isPhasingSafe": false
        },
        "ShufflingCreation": {
            "isPhasable": true,
            "subtype": 0,
            "mustHaveRecipient": false,
            "name": "ShufflingCreation",
            "canHaveRecipient": false,
            "type": 7,
            "isPhasingSafe": false
        },
        "ShufflingCancellation": {
            "isPhasable": false,
            "subtype": 5,
            "mustHaveRecipient": false,
            "name": "ShufflingCancellation",
            "canHaveRecipient": false,
            "type": 7,
            "isPhasingSafe": false
        },
        "BidOrderPlacement": {
            "isPhasable": true,
            "subtype": 3,
            "mustHaveRecipient": false,
            "name": "BidOrderPlacement",
            "canHaveRecipient": false,
            "type": 2,
            "isPhasingSafe": true
        },
        "ExchangeSell": {
            "isPhasable": true,
            "subtype": 6,
            "mustHaveRecipient": false,
            "name": "ExchangeSell",
            "canHaveRecipient": false,
            "type": 5,
            "isPhasingSafe": false
        },
        "DigitalGoodsDelisting": {
            "isPhasable": true,
            "subtype": 1,
            "mustHaveRecipient": false,
            "name": "DigitalGoodsDelisting",
            "canHaveRecipient": false,
            "type": 3,
            "isPhasingSafe": true
        },
        "AskOrderPlacement": {
            "isPhasable": true,
            "subtype": 2,
            "mustHaveRecipient": false,
            "name": "AskOrderPlacement",
            "canHaveRecipient": false,
            "type": 2,
            "isPhasingSafe": true
        },
        "DigitalGoodsDelivery": {
            "isPhasable": true,
            "subtype": 5,
            "mustHaveRecipient": true,
            "name": "DigitalGoodsDelivery",
            "canHaveRecipient": true,
            "type": 3,
            "isPhasingSafe": false
        },
        "PollCreation": {
            "isPhasable": true,
            "subtype": 2,
            "mustHaveRecipient": false,
            "name": "PollCreation",
            "canHaveRecipient": false,
            "type": 1,
            "isPhasingSafe": false
        },
        "OrdinaryPayment": {
            "isPhasable": true,
            "subtype": 0,
            "mustHaveRecipient": true,
            "name": "OrdinaryPayment",
            "canHaveRecipient": true,
            "type": 0,
            "isPhasingSafe": true
        },
        "CurrencyDeletion": {
            "isPhasable": true,
            "subtype": 8,
            "mustHaveRecipient": false,
            "name": "CurrencyDeletion",
            "canHaveRecipient": false,
            "type": 5,
            "isPhasingSafe": false
        }
    },
    "genesisAccountId": "1739068987193023818",
    "transactionTypes": {
        "0": {
            "subtypes": {
                "0": {
                    "isPhasable": true,
                    "subtype": 0,
                    "mustHaveRecipient": true,
                    "name": "OrdinaryPayment",
                    "canHaveRecipient": true,
                    "type": 0,
                    "isPhasingSafe": true
                }
            }
        },
        "1": {
            "subtypes": {
                "0": {
                    "isPhasable": true,
                    "subtype": 0,
                    "mustHaveRecipient": false,
                    "name": "ArbitraryMessage",
                    "canHaveRecipient": true,
                    "type": 1,
                    "isPhasingSafe": false
                },
                "1": {
                    "isPhasable": true,
                    "subtype": 1,
                    "mustHaveRecipient": false,
                    "name": "AliasAssignment",
                    "canHaveRecipient": false,
                    "type": 1,
                    "isPhasingSafe": false
                },
                "2": {
                    "isPhasable": true,
                    "subtype": 2,
                    "mustHaveRecipient": false,
                    "name": "PollCreation",
                    "canHaveRecipient": false,
                    "type": 1,
                    "isPhasingSafe": false
                },
                "3": {
                    "isPhasable": true,
                    "subtype": 3,
                    "mustHaveRecipient": false,
                    "name": "VoteCasting",
                    "canHaveRecipient": false,
                    "type": 1,
                    "isPhasingSafe": false
                },
                "4": {
                    "isPhasable": true,
                    "subtype": 4,
                    "mustHaveRecipient": false,
                    "name": "HubAnnouncement",
                    "canHaveRecipient": false,
                    "type": 1,
                    "isPhasingSafe": true
                },
                "5": {
                    "isPhasable": true,
                    "subtype": 5,
                    "mustHaveRecipient": false,
                    "name": "AccountInfo",
                    "canHaveRecipient": false,
                    "type": 1,
                    "isPhasingSafe": true
                },
                "6": {
                    "isPhasable": true,
                    "subtype": 6,
                    "mustHaveRecipient": false,
                    "name": "AliasSell",
                    "canHaveRecipient": true,
                    "type": 1,
                    "isPhasingSafe": false
                },
                "7": {
                    "isPhasable": true,
                    "subtype": 7,
                    "mustHaveRecipient": true,
                    "name": "AliasBuy",
                    "canHaveRecipient": true,
                    "type": 1,
                    "isPhasingSafe": false
                },
                "8": {
                    "isPhasable": true,
                    "subtype": 8,
                    "mustHaveRecipient": false,
                    "name": "AliasDelete",
                    "canHaveRecipient": false,
                    "type": 1,
                    "isPhasingSafe": false
                },
                "9": {
                    "isPhasable": true,
                    "subtype": 9,
                    "mustHaveRecipient": false,
                    "name": "PhasingVoteCasting",
                    "canHaveRecipient": false,
                    "type": 1,
                    "isPhasingSafe": true
                },
                "10": {
                    "isPhasable": true,
                    "subtype": 10,
                    "mustHaveRecipient": true,
                    "name": "AccountProperty",
                    "canHaveRecipient": true,
                    "type": 1,
                    "isPhasingSafe": true
                },
                "11": {
                    "isPhasable": true,
                    "subtype": 11,
                    "mustHaveRecipient": true,
                    "name": "AccountPropertyDelete",
                    "canHaveRecipient": true,
                    "type": 1,
                    "isPhasingSafe": true
                }
            }
        },
        "2": {
            "subtypes": {
                "0": {
                    "isPhasable": true,
                    "subtype": 0,
                    "mustHaveRecipient": false,
                    "name": "AssetIssuance",
                    "canHaveRecipient": false,
                    "type": 2,
                    "isPhasingSafe": true
                },
                "1": {
                    "isPhasable": true,
                    "subtype": 1,
                    "mustHaveRecipient": true,
                    "name": "AssetTransfer",
                    "canHaveRecipient": true,
                    "type": 2,
                    "isPhasingSafe": true
                },
                "2": {
                    "isPhasable": true,
                    "subtype": 2,
                    "mustHaveRecipient": false,
                    "name": "AskOrderPlacement",
                    "canHaveRecipient": false,
                    "type": 2,
                    "isPhasingSafe": true
                },
                "3": {
                    "isPhasable": true,
                    "subtype": 3,
                    "mustHaveRecipient": false,
                    "name": "BidOrderPlacement",
                    "canHaveRecipient": false,
                    "type": 2,
                    "isPhasingSafe": true
                },
                "4": {
                    "isPhasable": true,
                    "subtype": 4,
                    "mustHaveRecipient": false,
                    "name": "AskOrderCancellation",
                    "canHaveRecipient": false,
                    "type": 2,
                    "isPhasingSafe": true
                },
                "5": {
                    "isPhasable": true,
                    "subtype": 5,
                    "mustHaveRecipient": false,
                    "name": "BidOrderCancellation",
                    "canHaveRecipient": false,
                    "type": 2,
                    "isPhasingSafe": true
                },
                "6": {
                    "isPhasable": true,
                    "subtype": 6,
                    "mustHaveRecipient": false,
                    "name": "DividendPayment",
                    "canHaveRecipient": false,
                    "type": 2,
                    "isPhasingSafe": false
                },
                "7": {
                    "isPhasable": true,
                    "subtype": 7,
                    "mustHaveRecipient": false,
                    "name": "AssetDelete",
                    "canHaveRecipient": false,
                    "type": 2,
                    "isPhasingSafe": true
                }
            }
        },
        "3": {
            "subtypes": {
                "0": {
                    "isPhasable": true,
                    "subtype": 0,
                    "mustHaveRecipient": false,
                    "name": "DigitalGoodsListing",
                    "canHaveRecipient": false,
                    "type": 3,
                    "isPhasingSafe": true
                },
                "1": {
                    "isPhasable": true,
                    "subtype": 1,
                    "mustHaveRecipient": false,
                    "name": "DigitalGoodsDelisting",
                    "canHaveRecipient": false,
                    "type": 3,
                    "isPhasingSafe": true
                },
                "2": {
                    "isPhasable": true,
                    "subtype": 2,
                    "mustHaveRecipient": false,
                    "name": "DigitalGoodsPriceChange",
                    "canHaveRecipient": false,
                    "type": 3,
                    "isPhasingSafe": false
                },
                "3": {
                    "isPhasable": true,
                    "subtype": 3,
                    "mustHaveRecipient": false,
                    "name": "DigitalGoodsQuantityChange",
                    "canHaveRecipient": false,
                    "type": 3,
                    "isPhasingSafe": false
                },
                "4": {
                    "isPhasable": true,
                    "subtype": 4,
                    "mustHaveRecipient": true,
                    "name": "DigitalGoodsPurchase",
                    "canHaveRecipient": true,
                    "type": 3,
                    "isPhasingSafe": false
                },
                "5": {
                    "isPhasable": true,
                    "subtype": 5,
                    "mustHaveRecipient": true,
                    "name": "DigitalGoodsDelivery",
                    "canHaveRecipient": true,
                    "type": 3,
                    "isPhasingSafe": false
                },
                "6": {
                    "isPhasable": true,
                    "subtype": 6,
                    "mustHaveRecipient": true,
                    "name": "DigitalGoodsFeedback",
                    "canHaveRecipient": true,
                    "type": 3,
                    "isPhasingSafe": false
                },
                "7": {
                    "isPhasable": true,
                    "subtype": 7,
                    "mustHaveRecipient": true,
                    "name": "DigitalGoodsRefund",
                    "canHaveRecipient": true,
                    "type": 3,
                    "isPhasingSafe": false
                }
            }
        },
        "4": {
            "subtypes": {
                "0": {
                    "isPhasable": true,
                    "subtype": 0,
                    "mustHaveRecipient": true,
                    "name": "EffectiveBalanceLeasing",
                    "canHaveRecipient": true,
                    "type": 4,
                    "isPhasingSafe": true
                },
                "1": {
                    "isPhasable": true,
                    "subtype": 1,
                    "mustHaveRecipient": false,
                    "name": "SetPhasingOnly",
                    "canHaveRecipient": false,
                    "type": 4,
                    "isPhasingSafe": false
                }
            }
        },
        "5": {
            "subtypes": {
                "0": {
                    "isPhasable": true,
                    "subtype": 0,
                    "mustHaveRecipient": false,
                    "name": "CurrencyIssuance",
                    "canHaveRecipient": false,
                    "type": 5,
                    "isPhasingSafe": false
                },
                "1": {
                    "isPhasable": true,
                    "subtype": 1,
                    "mustHaveRecipient": false,
                    "name": "ReserveIncrease",
                    "canHaveRecipient": false,
                    "type": 5,
                    "isPhasingSafe": false
                },
                "2": {
                    "isPhasable": true,
                    "subtype": 2,
                    "mustHaveRecipient": false,
                    "name": "ReserveClaim",
                    "canHaveRecipient": false,
                    "type": 5,
                    "isPhasingSafe": false
                },
                "3": {
                    "isPhasable": true,
                    "subtype": 3,
                    "mustHaveRecipient": true,
                    "name": "CurrencyTransfer",
                    "canHaveRecipient": true,
                    "type": 5,
                    "isPhasingSafe": false
                },
                "4": {
                    "isPhasable": true,
                    "subtype": 4,
                    "mustHaveRecipient": false,
                    "name": "PublishExchangeOffer",
                    "canHaveRecipient": false,
                    "type": 5,
                    "isPhasingSafe": false
                },
                "5": {
                    "isPhasable": true,
                    "subtype": 5,
                    "mustHaveRecipient": false,
                    "name": "ExchangeBuy",
                    "canHaveRecipient": false,
                    "type": 5,
                    "isPhasingSafe": false
                },
                "6": {
                    "isPhasable": true,
                    "subtype": 6,
                    "mustHaveRecipient": false,
                    "name": "ExchangeSell",
                    "canHaveRecipient": false,
                    "type": 5,
                    "isPhasingSafe": false
                },
                "7": {
                    "isPhasable": true,
                    "subtype": 7,
                    "mustHaveRecipient": false,
                    "name": "CurrencyMinting",
                    "canHaveRecipient": false,
                    "type": 5,
                    "isPhasingSafe": false
                },
                "8": {
                    "isPhasable": true,
                    "subtype": 8,
                    "mustHaveRecipient": false,
                    "name": "CurrencyDeletion",
                    "canHaveRecipient": false,
                    "type": 5,
                    "isPhasingSafe": false
                }
            }
        },
        "6": {
            "subtypes": {
                "0": {
                    "isPhasable": false,
                    "subtype": 0,
                    "mustHaveRecipient": false,
                    "name": "TaggedDataUpload",
                    "canHaveRecipient": false,
                    "type": 6,
                    "isPhasingSafe": false
                },
                "1": {
                    "isPhasable": false,
                    "subtype": 1,
                    "mustHaveRecipient": false,
                    "name": "TaggedDataExtend",
                    "canHaveRecipient": false,
                    "type": 6,
                    "isPhasingSafe": false
                }
            }
        },
        "7": {
            "subtypes": {
                "0": {
                    "isPhasable": true,
                    "subtype": 0,
                    "mustHaveRecipient": false,
                    "name": "ShufflingCreation",
                    "canHaveRecipient": false,
                    "type": 7,
                    "isPhasingSafe": false
                },
                "1": {
                    "isPhasable": true,
                    "subtype": 1,
                    "mustHaveRecipient": false,
                    "name": "ShufflingRegistration",
                    "canHaveRecipient": false,
                    "type": 7,
                    "isPhasingSafe": false
                },
                "2": {
                    "isPhasable": false,
                    "subtype": 2,
                    "mustHaveRecipient": false,
                    "name": "ShufflingProcessing",
                    "canHaveRecipient": false,
                    "type": 7,
                    "isPhasingSafe": false
                },
                "3": {
                    "isPhasable": false,
                    "subtype": 3,
                    "mustHaveRecipient": false,
                    "name": "ShufflingRecipients",
                    "canHaveRecipient": false,
                    "type": 7,
                    "isPhasingSafe": false
                },
                "4": {
                    "isPhasable": false,
                    "subtype": 4,
                    "mustHaveRecipient": false,
                    "name": "ShufflingVerification",
                    "canHaveRecipient": false,
                    "type": 7,
                    "isPhasingSafe": false
                },
                "5": {
                    "isPhasable": false,
                    "subtype": 5,
                    "mustHaveRecipient": false,
                    "name": "ShufflingCancellation",
                    "canHaveRecipient": false,
                    "type": 7,
                    "isPhasingSafe": false
                }
            }
        }
    },
    "votingModels": {"NQT": 1, "CURRENCY": 3, "ACCOUNT": 0, "ASSET": 2, "TRANSACTION": 4, "NONE": -1, "HASH": 5},
    "holdingTypes": {"CURRENCY": 2, "ASSET": 1, "NXT": 0},
    "maxPrunableMessageLength": 43008,
    "shufflingParticipantStates": {"CANCELLED": 3, "REGISTERED": 0, "PROCESSED": 1, "VERIFIED": 2},
    "disabledAPITags": [],
    "maxBlockPayloadLength": 44880,
    "maxPhasingDuration": 20160,
    "proxyNotForwardedRequests": ["getState", "getMyInfo", "getBlockchainStatus", "getPeer", "getPeers", "retrievePrunedData", "getInboundPeers"],
    "mintingHashAlgorithms": {"SHA256": 2, "SHA3": 3, "SCRYPT": 5, "Keccak25": 25},
    "maxArbitraryMessageLength": 160,
    "apiTags": {
        "NETWORK": {"name": "Networking", "enabled": true},
        "FORGING": {"name": "Forging", "enabled": true},
        "AE": {"name": "Asset Exchange", "enabled": true},
        "UTILS": {"name": "Utils", "enabled": true},
        "ACCOUNTS": {"name": "Accounts", "enabled": true},
        "SEARCH": {"name": "Search", "enabled": true},
        "MS": {"name": "Monetary System", "enabled": true},
        "TOKENS": {"name": "Tokens", "enabled": true},
        "INFO": {"name": "Server Info", "enabled": true},
        "TRANSACTIONS": {"name": "Transactions", "enabled": true},
        "DEBUG": {"name": "Debug", "enabled": true},
        "CREATE_TRANSACTION": {"name": "Create Transaction", "enabled": true},
        "DGS": {"name": "Digital Goods Store", "enabled": true},
        "SHUFFLING": {"name": "Shuffling", "enabled": true},
        "PHASING": {"name": "Phasing", "enabled": true},
        "BLOCKS": {"name": "Blocks", "enabled": true},
        "DATA": {"name": "Tagged Data", "enabled": true},
        "ALIASES": {"name": "Aliases", "enabled": true},
        "MESSAGES": {"name": "Messages", "enabled": true},
        "ADDONS": {"name": "Add-ons", "enabled": true},
        "VS": {"name": "Voting System", "enabled": true},
        "ACCOUNT_CONTROL": {"name": "Account Control", "enabled": true}
    },
    "maxTaggedDataDataLength": 43008,
    "shufflingStages": {"CANCELLED": 4, "DONE": 5, "PROCESSING": 1, "BLAME": 3, "REGISTRATION": 0, "VERIFICATION": 2},
    "disabledAPIs": [[]],
    "genesisBlockId": "2680262203532249785",
    "currencyTypes": {
        "EXCHANGEABLE": 1,
        "CLAIMABLE": 8,
        "MINTABLE": 16,
        "CONTROLLABLE": 2,
        "RESERVABLE": 4,
        "NON_SHUFFLEABLE": 32
    },
    "peerStates": {"DISCONNECTED": 2, "NON_CONNECTED": 0, "CONNECTED": 1},
    "epochBeginning": 1385294400000,
    "minBalanceModels": {"NQT": 1, "CURRENCY": 3, "ASSET": 2, "NONE": 0},
    "phasingHashAlgorithms": {"SHA256": 2, "RIPEMD160": 6, "RIPEMD160_SHA256": 62},
    "hashAlgorithms": {"SHA256": 2, "SHA3": 3, "SCRYPT": 5, "RIPEMD160": 6, "Keccak25": 25, "RIPEMD160_SHA256": 62},
    "requestTypes": {
        "getLastExchanges": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "startFundingMonitor": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": true,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getExpectedAskOrders": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAccountPublicKey": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "detectMimeType": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "fileParameter": "file",
            "requirePost": true,
            "enabled": true
        },
        "getBlocks": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAssetsByIssuer": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getExchangesByOffer": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAllOpenBidOrders": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "dgsPurchase": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getAccountBlockCount": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "deleteAlias": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "decodeFileToken": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "fileParameter": "file",
            "requirePost": true,
            "enabled": true
        },
        "getPlugins": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": false,
            "enabled": true
        },
        "getDataTagsLike": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getFundingMonitor": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": true,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getPolls": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "downloadTaggedData": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getDataTags": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getPollVote": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAssetDeletes": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "addPeer": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "getSharedKey": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "decodeToken": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "popOff": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "getAccountPhasedTransactions": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAvailableToBuy": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getNextBlockGenerators": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getExpectedAssetDeletes": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "startForging": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": true,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getTaggedDataExtendTransactions": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAssetAccounts": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getCurrencyFounders": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "currencyBuy": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "decodeQRCode": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "getAllExchanges": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getCurrencyTransfers": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getExpectedOrderCancellations": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "eventRegister": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "scan": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "hexConvert": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": false,
            "enabled": true
        },
        "getPhasingOnlyControl": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getDGSTagCount": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getOffer": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "encodeQRCode": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "getChannelTaggedData": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAvailableToSell": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "cancelBidOrder": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "shufflingCancel": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getAccount": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "blacklistAPIProxyPeer": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "getPeer": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAccountCurrentAskOrderIds": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getUnconfirmedTransactionIds": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAccountShufflings": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getExpectedSellOffers": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "dgsPriceChange": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getAliasesLike": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "dgsListing": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "fileParameter": "messageFile",
            "requirePost": true,
            "enabled": true
        },
        "getBidOrder": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "sendMessage": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getAllBroadcastedTransactions": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": false,
            "enabled": true
        },
        "placeBidOrder": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getAccountBlocks": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getShuffling": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "setAPIProxyPeer": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "getAccountCurrencies": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getExpectedTransactions": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAccountCurrentBidOrderIds": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAllPhasingOnlyControls": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "dgsRefund": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getAssetIds": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getTaggedData": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "searchAccounts": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAccountLedger": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAccountAssets": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "deleteAccountProperty": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getBlockchainTransactions": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "sendMoney": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "extendTaggedData": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "fileParameter": "file",
            "requirePost": true,
            "enabled": true
        },
        "getMyInfo": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAccountTaggedData": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAllTrades": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getStackTraces": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": false,
            "enabled": true
        },
        "rsConvert": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": false,
            "enabled": true
        },
        "searchTaggedData": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAllTaggedData": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getDGSPendingPurchases": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getECBlock": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "generateFileToken": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "fileParameter": "file",
            "requirePost": true,
            "enabled": true
        },
        "searchDGSGoods": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAccountPhasedTransactionCount": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getCurrencyAccounts": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "shufflingCreate": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getAlias": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getPhasingPolls": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "markHost": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "canDeleteCurrency": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getPhasingPollVote": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "stopFundingMonitor": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": true,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getTime": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": false,
            "enabled": true
        },
        "buyAlias": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "searchPolls": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "eventWait": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "castVote": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getMintingTarget": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "generateToken": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "longConvert": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": false,
            "enabled": true
        },
        "getBlockId": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getLastTrades": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getExpectedBidOrders": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getBidOrderIds": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getBlockchainStatus": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getConstants": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": false,
            "enabled": true
        },
        "getTransaction": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getBlock": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "verifyTaggedData": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "fileParameter": "file",
            "requirePost": false,
            "enabled": true
        },
        "getExchangesByExchangeRequest": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getPrunableMessage": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "dividendPayment": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "broadcastTransaction": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "currencySell": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "blacklistPeer": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "dgsDelivery": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getFxtQuantity": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "setAccountProperty": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getShufflers": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": true,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getDGSGoodsPurchaseCount": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "sendTransaction": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "getAssignedShufflings": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getGuaranteedBalance": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "fullHashToId": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": false,
            "enabled": true
        },
        "getExpectedBuyOffers": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAskOrders": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "stopForging": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": true,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getAccountExchangeRequests": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "downloadPrunableMessage": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAsset": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "clearUnconfirmedTransactions": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "getHoldingShufflings": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAssetDividends": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAssetPhasedTransactions": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAccountCurrentBidOrders": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "dgsQuantityChange": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getExpectedCurrencyTransfers": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "cancelAskOrder": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "searchAssets": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getDataTagCount": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "dgsDelisting": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "deleteCurrency": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getAssetTransfers": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getBalance": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getCurrencyPhasedTransactions": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "setPhasingOnlyControl": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getCurrencies": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getDGSGoods": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "currencyReserveIncrease": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "deleteAssetShares": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "setLogging": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "getAliasCount": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getTransactionBytes": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "retrievePrunedTransaction": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getExpectedAssetTransfers": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAllAssets": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getInboundPeers": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "hash": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": false,
            "enabled": true
        },
        "createPoll": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "verifyPrunableMessage": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getDGSPurchase": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getReferencingTransactions": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getForging": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": true,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "readMessage": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "luceneReindex": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "fullReset": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "getAccountBlockIds": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getPollResult": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getDGSPurchaseCount": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAllWaitingTransactions": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": false,
            "enabled": true
        },
        "decryptFrom": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAccountAssetCount": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAssets": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getCurrenciesByIssuer": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getPeers": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAllShufflings": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "placeAskOrder": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "rebroadcastUnconfirmedTransactions": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "getAllCurrencies": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "setAccountInfo": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getDGSGood": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAskOrderIds": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAccountCurrencyCount": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "decodeHallmark": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAskOrder": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getExpectedExchangeRequests": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getCurrencyIds": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "shufflingProcess": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "requeueUnconfirmedTransactions": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "signTransaction": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": false,
            "enabled": true
        },
        "getAliases": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "trimDerivedTables": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "getSellOffers": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getLog": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": false,
            "enabled": true
        },
        "getAccountLedgerEntry": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "transferAsset": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "stopShuffler": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": true,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "publishExchangeOffer": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getLinkedPhasedTransactions": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "approveTransaction": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getDGSTagsLike": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "parseTransaction": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": false,
            "enabled": true
        },
        "getCurrency": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getBidOrders": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getDGSGoodsCount": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getCurrencyAccountCount": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getDGSPurchases": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getShufflingParticipants": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAccountLessors": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "startShuffler": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": true,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getPoll": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getVoterPhasedTransactions": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "transferCurrency": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "leaseBalance": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "setAlias": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "shutdown": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "getDGSExpiredPurchases": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "searchCurrencies": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "shufflingRegister": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "currencyReserveClaim": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getPollVotes": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAccountCurrentAskOrders": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getDGSTags": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getOrderTrades": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "sellAlias": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "dumpPeers": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": true,
            "enabled": true
        },
        "getAllOpenAskOrders": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAllPrunableMessages": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "dgsFeedback": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getPhasingPoll": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "shufflingVerify": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getDGSGoodsPurchases": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getAssetAccountCount": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getPhasingPollVotes": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "retrievePrunedData": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": true,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getUnconfirmedTransactions": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "encryptTo": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getBuyOffers": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getState": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "issueCurrency": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getAccountId": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": false,
            "enabled": true
        },
        "issueAsset": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "getTrades": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getPrunableMessages": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "calculateFullHash": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": false,
            "requirePost": false,
            "enabled": true
        },
        "currencyMint": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": true,
            "enabled": true
        },
        "uploadTaggedData": {
            "allowRequiredBlockParameters": false,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "fileParameter": "file",
            "requirePost": true,
            "enabled": true
        },
        "getAccountProperties": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        },
        "getExchanges": {
            "allowRequiredBlockParameters": true,
            "requireFullClient": false,
            "requirePassword": false,
            "requireBlockchain": true,
            "requirePost": false,
            "enabled": true
        }
    }
};