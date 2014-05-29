var NRS = (function(NRS, $, undefined) {
	NRS.pages.aliases = function() {
		NRS.pageLoading();

		NRS.sendRequest("getAliases+", {
			"account": NRS.account,
			"timestamp": 0
		}, function(response) {
			if (response.aliases && response.aliases.length) {
				var aliases = response.aliases;

				if (NRS.unconfirmedTransactions.length) {
					for (var i = 0; i < NRS.unconfirmedTransactions.length; i++) {
						var unconfirmedTransaction = NRS.unconfirmedTransactions[i];

						if (unconfirmedTransaction.type == 1 && unconfirmedTransaction.subtype == 1) {
							var found = false;

							for (var j = 0; j < aliases.length; j++) {
								if (aliases[j].aliasName == unconfirmedTransaction.attachment.alias) {
									aliases[j].aliasURI = unconfirmedTransaction.attachment.uri;
									aliases[j].tentative = true;
									found = true;
									break;
								}
							}

							if (!found) {
								aliases.push({
									"aliasName": unconfirmedTransaction.attachment.alias,
									"aliasURI": unconfirmedTransaction.attachment.uri,
									"tentative": true
								});
							}
						}
					}
				}

				aliases.sort(function(a, b) {
					if (a.aliasName.toLowerCase() > b.aliasName.toLowerCase()) {
						return 1;
					} else if (a.aliasName.toLowerCase() < b.aliasName.toLowerCase()) {
						return -1;
					} else {
						return 0;
					}
				});

				var rows = "";

				var alias_account_count = 0,
					alias_uri_count = 0,
					empty_alias_count = 0,
					alias_count = aliases.length;

				for (var i = 0; i < alias_count; i++) {
					var alias = aliases[i];

					alias.status = "/";

					var unconfirmedTransaction = NRS.getUnconfirmedTransaction(1, 6, {
						"alias": alias.aliasName
					});

					if (unconfirmedTransaction) {
						alias.tentative = true;
						alias.buyer = unconfirmedTransaction.recipient;
						alias.priceNQT = unconfirmedTransaction.priceNQT;
					}

					if (alias.buyer) {
						if (alias.priceNQT == "0") {
							alias.status = "Transfer In Progress";
						} else {
							if (alias.buyer != NRS.genesis) {
								alias.status = "For Sale (direct)";
							} else {
								alias.status = "For Sale (indirect)";
							}
						}
					}

					if (alias.status != "/") {
						alias.status = "<span class='label label-info'>" + alias.status + "</span>";
					}

					rows += "<tr" + (alias.tentative ? " class='tentative'" : "") + " data-alias='" + String(alias.aliasName).toLowerCase().escapeHTML() + "'><td class='alias'>" + String(alias.aliasName).escapeHTML() + "</td><td>" + (alias.aliasURI.indexOf("http") === 0 ? "<a href='" + String(alias.aliasURI).escapeHTML() + "' target='_blank'>" + String(alias.aliasURI).escapeHTML() + "</a>" : String(alias.aliasURI).escapeHTML()) + "</td><td class='status'>" + alias.status + "</td><td style='white-space:nowrap'><a class='btn btn-xs btn-default' href='#' data-toggle='modal' data-target='#register_alias_modal' data-alias='" + String(alias.aliasName).escapeHTML() + "'>Edit</a> <a class='btn btn-xs btn-default' href='#' data-toggle='modal' data-target='#transfer_alias_modal' data-alias='" + String(alias.aliasName).escapeHTML() + "'>Transfer</a> <a class='btn btn-xs btn-default' href='#' data-toggle='modal' data-target='#sell_alias_modal' data-alias='" + String(alias.aliasName).escapeHTML() + "'>Sell</a></td></tr>";

					if (!alias.aliasURI) {
						empty_alias_count++;
					} else if (alias.aliasURI.indexOf("http") === 0) {
						alias_uri_count++;
					} else if (alias.aliasURI.indexOf("acct:") === 0 || alias.aliasURI.indexOf("nacc:") === 0) {
						alias_account_count++;
					}
				}

				$("#aliases_table tbody").empty().append(rows);
				NRS.dataLoadFinished($("#aliases_table"));

				$("#alias_account_count").html(alias_account_count).removeClass("loading_dots");
				$("#alias_uri_count").html(alias_uri_count).removeClass("loading_dots");
				$("#empty_alias_count").html(empty_alias_count).removeClass("loading_dots");
				$("#alias_count").html(alias_count).removeClass("loading_dots");
			} else {
				$("#aliases_table tbody").empty();
				NRS.dataLoadFinished($("#aliases_table"));

				$("#alias_account_count, #alias_uri_count, #empty_alias_count, #alias_count").html("0").removeClass("loading_dots");
			}

			NRS.pageLoaded();
		});
	}

	$("#transfer_alias_modal, #sell_alias_modal").on("show.bs.modal", function(e) {
		var $invoker = $(e.relatedTarget);

		var alias = String($invoker.data("alias"));

		$(this).find("input[name=aliasName]").val(alias.escapeHTML());
		$(this).find(".alias_name_display").html(alias.escapeHTML());

		if ($(this).attr("id") == "sell_alias_modal") {
			$(this).find("ul.nav-pills li").removeClass("active");
			$(this).find("ul.nav-pills li:first-child").addClass("active");
			$("#sell_alias_recipient_div").show();
		}
	});

	NRS.forms.sellAliasComplete = function(response, data) {
		if (response.alreadyProcessed) {
			return;
		}

		var $row = $("#aliases_table tr[data-alias=" + String(data.aliasName).toLowerCase().escapeHTML() + "]");

		$row.addClass("tentative");

		//transfer
		if (data.priceNQT == "0") {
			$row.find("td.status").html("<span class='label label-info'>Transfer In Progress</span>");
		} else {
			if (data.recipient != "0") {
				$row.find("td.status").html("<span class='label label-info'>For Sale (direct)</span>");
			} else {
				$row.find("td.status").html("<span class='label label-info'>For Sale (indirect)</span>");
			}
		}
	}

	$("#sell_alias_to_specific_account, #sell_alias_to_anyone").on("click", function(e) {
		e.preventDefault();

		$(this).closest("ul").find("li").removeClass("active");
		$(this).parent().addClass("active");

		var $modal = $(this).closest(".modal");

		if ($(this).attr("id") == "sell_alias_to_anyone") {
			$modal.find("input[name=recipient]").val("0");
			$("#sell_alias_recipient_div").hide();
		} else {
			$modal.find("input[name=recipient]").val("");
			$("#sell_alias_recipient_div").show();
		}

		$modal.find("input[name=converted_account_id]").val("");
		$modal.find(".callout").hide();
	});

	$("#register_alias_modal").on("show.bs.modal", function(e) {
		var $invoker = $(e.relatedTarget);

		var alias = $invoker.data("alias");

		if (alias) {
			alias = String(alias);

			NRS.sendRequest("getAlias", {
				"aliasName": alias
			}, function(response) {
				if (/http:\/\//i.test(response.aliasURI)) {
					NRS.forms.setAliasType("uri");
				} else if (/acct:(\d+)@nxt/.test(response.aliasURI) || /nacc:(\d+)/.test(response.aliasURI)) {
					NRS.forms.setAliasType("account");
				} else {
					NRS.forms.setAliasType("general");
				}

				$("#register_alias_modal h4.modal-title").html("Update Alias");
				$("#register_alias_modal .btn-primary").html("Update");
				$("#register_alias_alias").val(alias.escapeHTML()).hide();
				$("#register_alias_alias_noneditable").html(alias.escapeHTML()).show();
				$("#register_alias_alias_update").val(1);
				$("#register_alias_uri").val(response.aliasURI);
			}, false);
		} else {
			$("#register_alias_modal h4.modal-title").html("Register Alias");
			$("#register_alias_modal .btn-primary").html("Register");
			$("#register_alias_alias").val("").show();
			$("#register_alias_alias_noneditable").html("").hide();
			$("#register_alias_alias_update").val(0);
			NRS.forms.setAliasType("uri");
		}
	});

	NRS.incoming.aliases = function(transactions) {
		if (NRS.hasTransactionUpdates(transactions)) {
			NRS.pages.aliases();
		}
	}

	NRS.forms.setAlias = function($modal) {
		var data = NRS.getFormData($modal.find("form:first"));

		data.uri = $.trim(data.uri);

		if (data.type == "account") {
			if (!(/acct:(\d+)@nxt/.test(data.uri)) && !(/nacc:(\d+)/.test(data.uri))) {
				if (/^\d+$/.test(data.uri)) {
					data.uri = "acct:" + data.uri + "@nxt";
				} else {
					return {
						"error": "Invalid account ID."
					};
				}
			}

		}
		delete data["type"];

		if ($("#register_alias_alias_update").val() == 1) {
			return {
				"data": data,
				"successMessage": "Alias updated successfully"
			};
		} else {
			return {
				"data": data
			};
		}
	}

	NRS.forms.setAliasType = function(type, uri) {
		$("#register_alias_type").val(type);

		if (type == "uri") {
			$("#register_alias_uri_label").html("URI");
			$("#register_alias_uri").prop("placeholder", "URI");
			if (uri) {
				if (!/https?:\/\//i.test(uri)) {
					$("#register_alias_uri").val("http://" + uri);
				} else {
					$("#register_alias_uri").val(uri);
				}
			} else {
				$("#register_alias_uri").val("http://");
			}
			$("#register_alias_help").hide();
		} else if (type == "account") {
			$("#register_alias_uri_label").html("Account ID");
			$("#register_alias_uri").prop("placeholder", "Account ID");
			$("#register_alias_uri").val("");
			if (uri) {
				if (!(/acct:(\d+)@nxt/.test(uri)) && !(/nacc:(\d+)/.test(uri))) {
					if (/^\d+$/.test(uri)) {
						$("#register_alias_uri").val("acct:" + uri + "@nxt");
					} else {
						$("#register_alias_uri").val("");
					}
				} else {
					$("#register_alias_uri").val("");
				}
			} else {
				$("#register_alias_uri").val("");
			}
			$("#register_alias_help").html("The alias will reference the account number entered and can be used to send Nxt to, messages, etc..").show();
		} else {
			$("#register_alias_uri_label").html("Data");
			$("#register_alias_uri").prop("placeholder", "Data");
			if (uri) {
				$("#register_alias_uri").val(uri);
			} else {
				$("#register_alias_uri").val("");
			}
			$("#register_alias_help").html("The alias can contain any data you want.").show();
		}
	}

	$("#register_alias_type").on("change", function() {
		var type = $(this).val();
		NRS.forms.setAliasType(type, $("#register_alias_uri").val());
	});

	NRS.forms.setAliasComplete = function(response, data) {
		if (response.alreadyProcessed) {
			return;
		}

		if (NRS.currentPage == "aliases") {
			data.aliasName = String(data.aliasName).escapeHTML();
			data.aliasURI = String(data.aliasURI).escapeHTML();

			var $table = $("#aliases_table tbody");

			var $row = $table.find("tr[data-alias=" + data.aliasName.toLowerCase() + "]");

			if ($row.length) {
				$row.addClass("tentative");
				$row.find("td.alias").html(data.aliasName);

				if (data.aliasURI && data.aliasURI.indexOf("http") === 0) {
					$row.find("td.uri").html("<a href='" + data.aliasURI + "' target='_blank'>" + data.aliasURI + "</a>");
				} else {
					$row.find("td.uri").html(data.aliasURI);
				}
			} else {
				var $rows = $table.find("tr");

				var rowToAdd = "<tr class='tentative' data-alias='" + data.aliasName.toLowerCase() + "'><td class='alias'>" + data.aliasName + "</td><td class='uri'>" + (data.aliasURI && data.aliasURI.indexOf("http") === 0 ? "<a href='" + data.aliasURI + "' target='_blank'>" + data.aliasURI + "</a>" : data.aliasURI) + "</td><td>/</td><td style='white-space:nowrap'><a class='btn btn-xs btn-default' href='#'>Edit</a> <a class='btn btn-xs btn-default' href='#'>Transfer</a> <a class='btn btn-xs btn-default' href='#'>Sell</a></td></tr>";

				var rowAdded = false;

				var newAlias = data.aliasName.toLowerCase();

				if ($rows.length) {
					$rows.each(function() {
						var alias = $(this).data("alias");

						if (newAlias < alias) {
							$(this).before(rowToAdd);
							rowAdded = true;
							return false;
						}
					});
				}

				if (!rowAdded) {
					$table.append(rowToAdd);
				}

				if ($("#aliases_table").parent().hasClass("data-empty")) {
					$("#aliases_table").parent().removeClass("data-empty");
				}
			}
		}
	}

	$("#alias_search").on("submit", function(e) {
		e.preventDefault();

		if (NRS.fetchingModalData) {
			return;
		}

		NRS.fetchingModalData = true;

		var alias = $.trim($("#alias_search input[name=q]").val());

		$("#alias_info_table tbody").empty();

		NRS.sendRequest("getAlias", {
			"aliasName": alias
		}, function(response, input) {
			if (response.errorCode) {
				$.growl("Could not find alias.", {
					"type": "danger"
				});
				NRS.fetchingModalData = false;
			} else {
				$("#alias_info_modal_alias").html(String(response.aliasName).escapeHTML());

				var data = {
					"Account": NRS.getAccountTitle(response, "account"),
					"Last Updated": NRS.formatTimestamp(response.timestamp),
					"DataFormattedHTML": String(response.aliasURI).autoLink()
				}

				$("#alias_info_table tbody").append(NRS.createInfoTable(data));

				$("#alias_info_modal").modal("show");
				NRS.fetchingModalData = false;
			}
		});
	});

	return NRS;
}(NRS || {}, jQuery));