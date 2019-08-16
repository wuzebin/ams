export default {
	defaultList: {
		type: 'list',
		resource: {
			fields: {
				text: {
					label: '文本',
					type: 'text'
				},
				inputnumber: {
					type: 'inputnumber',
					label: '数字输入'
				},
				select: {
					type: 'select',
					label: 'select多选',
					props: {
						options: {
							a: '黄金糕',
							b: '双皮奶',
							c: '蚵仔煎',
							d: '龙须面',
							e: '北京烤鸭'
						}
					}
				}
			}
		},
		data: {
			list: [{
				text: '双11活动',
				inputnumber: 3,
				select: 'a,b,c'
			},
			{
				text: '双11活动2',
				inputnumber: 4,
				select: 'b,c'
			},
			{
				text: '双11活动3',
				inputnumber: 5,
				select: 'a,b,c'
			},
			{
				text: '双11活动4',
				inputnumber: 6,
				select: 'c'
			}]
		}
	},
	indexList: {
		type: 'list',
		resource: {
			fields: {
				text: {
					label: '文本',
					type: 'text'
				},
				inputnumber: {
					type: 'inputnumber',
					label: '数字输入'
				},
				select: {
					type: 'select',
					label: 'select多选',
					props: {
						options: {
							a: '黄金糕',
							b: '双皮奶',
							c: '蚵仔煎',
							d: '龙须面',
							e: '北京烤鸭'
						}
					}
				}
			}
		},
		data: {
			list: [{
				text: '双11活动',
				inputnumber: 3,
				select: 'a,b,c'
			},
			{
				text: '双11活动2',
				inputnumber: 4,
				select: 'b,c'
			},
			{
				text: '双11活动3',
				inputnumber: 5,
				select: 'a,b,c'
			},
			{
				text: '双11活动4',
				inputnumber: 6,
				select: 'c'
			}]
		},
		props: {
			type: 'index'
		}
	},
	pagesList: {
		type: 'list',
		resource: {
            api: {
                prefix: "https://easy-mock.com/mock/5a0023effbbb09615044cb82/",
                list: "smallList",
                successCode: 0
            },
            fields: {
                id: {
                    type: "text",
					label: "ID",
					props: {
						width: 50
					}
                },
                testText: {
                    type: "text",
                    label: "名称"
                },
                testTextarea: {
                    type: "textarea",
                    label: "文本框"
                },
                testDate: {
                    type: "datetime",
                    label: "创建时间"
                },
                testSwitch: {
                    type: "switch",
					label: "开关"
                }
            }
		},
		events: {
			init: '@list'
		}
	},
	filtersList: {
		type: 'list',
		resource: {
            api: {
                prefix: "https://easy-mock.com/mock/5a0023effbbb09615044cb82/",
                list: "smallList",
                successCode: 0
            },
            fields: {
                id: {
                    type: "text",
					label: "ID",
					props: {
						width: 100
					}
                },
				testSelect: {
					type: 'select',
					label: 'select多选',
					props: {
						options: {
							a: '黄金糕',
							b: '双皮奶',
							c: '蚵仔煎',
							d: '龙须面',
							e: '北京烤鸭'
						}
					}
				},
                testText: {
                    type: "text",
                    label: "名称"
                },
                testTextarea: {
                    type: "textarea",
                    label: "文本框"
                },
                testDate: {
                    type: "datetime",
                    label: "创建时间"
                }
            }
		},
		filters: {
			testSelect: {
				multiple: true, // 多选
				remote: true // 远程过滤
			}
		},
		// 排序设置（列表特有）
		sorts: {
			id: true
		},
		events: {
			init: '@list'
		}
	},
	searchsList: {
		type: 'list',
		resource: {
			api: {
                prefix: "https://easy-mock.com/mock/5a0023effbbb09615044cb82/",
                list: "smallList",
                successCode: 0
            },
            fields: {
                id: {
                    type: "text",
					label: "ID"
                },
				testSelect: {
					type: 'select',
					label: 'select多选',
					props: {
						options: {
							a: '黄金糕',
							b: '双皮奶',
							c: '蚵仔煎',
							d: '龙须面',
							e: '北京烤鸭'
						}
					}
				},
                testText: {
                    type: "text",
					label: "名称",
					props: {
						placeholder: '请输入名词'
					}
                }
            }
		},
		data: {
			list: [{
				id: 3,
				testText: '双11活动',
				testSelect: 'a,b,c'
			},
			{
				id: 4,
				testText: '双11活动2',
				testSelect: 'b,c'
			},
			{
				id: 5,
				testText: '双11活动3',
				testSelect: 'a,b,c'
			},
			{
				id: 6,
				testText: '双11活动4',
				testSelect: 'c'
			}]
		},
		operations: {
			testText: {
				slot: 'searchs',
				type: 'field',
				label: "名称"
			},
			testSelect: {
				slot: 'searchs',
				type: 'field',
				label: "类型"
			},
			search: {
				slot: 'searchs',
				type: 'button',
				props: {
					type: 'primary'
				},
				label: '搜索',
				event: 'list:1'
			}
		}
	},
	multipleSelectList: {
		type: 'list',
		resource: {
            fields: {
                id: {
                    type: "text",
					label: "ID"
                },
				testSelect: {
					type: 'select',
					label: 'select多选',
					props: {
						options: {
							a: '黄金糕',
							b: '双皮奶',
							c: '蚵仔煎',
							d: '龙须面',
							e: '北京烤鸭'
						}
					}
				},
                testText: {
                    type: "text",
					label: "名称",
					props: {
						placeholder: '请输入名词'
					}
                }
            }
		},
		data: {
			list: [{
				id: 3,
				testText: '双11活动',
				testSelect: 'a,b,c'
			},
			{
				id: 4,
				testText: '双11活动2',
				testSelect: 'b,c'
			},
			{
				id: 5,
				testText: '双11活动3',
				testSelect: 'a,b,c'
			},
			{
				id: 6,
				testText: '双11活动4',
				testSelect: 'c'
			}],
			total: 100
		},
		options: {
			multipleSelect: true
		},
		operations: {
			selectMulti: {
				slot: 'multipleSelect',
				type: 'field',
				field: 'testSelect'
				// label: '可省略'
			},
			buttonMulti: {
				slot: 'multipleSelect',
				type: 'button',
				label: '删除',
				event: 'multi'
			}
		},
		actions: {
			multi(args) {
				this.$message('你点击了删除按钮！')
				console.log('multipleSelect action', args.$prevReturn);
			}
		}
	},
	slotBlocksList: {
		type: 'list',
		resource: {
            fields: {
                id: {
                    type: "text",
					label: "ID"
                },
				testSelect: {
					type: 'select',
					label: 'select多选',
					props: {
						options: {
							a: '黄金糕',
							b: '双皮奶',
							c: '蚵仔煎',
							d: '龙须面',
							e: '北京烤鸭'
						}
					}
				},
                testText: {
                    type: "text",
					label: "名称",
					props: {
						placeholder: '请输入名词'
					}
                }
            }
		},
		data: {
			list: [{
				id: 3,
				testText: '双11活动',
				testSelect: 'a,b,c'
			},
			{
				id: 4,
				testText: '双11活动2',
				testSelect: 'b,c'
			},
			{
				id: 5,
				testText: '双11活动3',
				testSelect: 'a,b,c'
			},
			{
				id: 6,
				testText: '双11活动4',
				testSelect: 'c'
			}],
			total: 100
		},
		operations: {
			testText: {
				slot: 'searchs',
				type: 'field'
			},
			search: {
				slot: 'searchs',
				type: 'button',
				props: {
					type: 'primary'
				},
				label: '搜索',
				event: 'list:1'
			}
		},
		blocks: {
			listTop: {
				type: 'component',
				options: {
					is: 'div',
					text: '我是列表区块最顶部的插槽内容！！'
				},
				style: {
					padding: '20px',
					marginBottom: '20px',
					border: '1px solid #3eaf7c'
				},
				slot: 'top'
			},
			listTableTop: {
				type: 'component',
				options: {
					is: 'div',
					text: '我是列表区块表格顶部的插槽内容！！'
				},
				style: {
					padding: '20px',
					border: '1px solid #f60'
				},
				slot: 'tableTop'
			}
		}
	},
	operationsList: {
		type: 'list',
		resource: {
			fields: {
			text: {
				label: '文本',
				type: 'text'
			},
			inputnumber: {
				type: 'inputnumber',
				label: '数字输入'
			},
			select: {
				type: 'select',
				label: 'select多选',
				props: {
					options: {
						a: '黄金糕',
						b: '双皮奶',
						c: '蚵仔煎',
						d: '龙须面',
						e: '北京烤鸭'
					}
				}
			}
		}
		},
		data: {
			list: [{
				text: '双11活动',
				inputnumber: 3,
				select: 'a,b,c'
			},
			{
				text: '双11活动2',
				inputnumber: 4,
				select: 'b,c'
			},
			{
				text: '双11活动3',
				inputnumber: 5,
				select: 'a,b,c'
			},
			{
				text: '双11活动4',
				inputnumber: 6,
				select: 'c'
			}]
		},
		operations: {
			testNewInput: {
				slot: 'searchs',
				type: 'field',
				field: {
					type: 'text',
					props: {
					placeholder: '折'
					},
					style: {
						width: '100px'
					}
				}
			},
			search: {
				slot: 'searchs',
				type: 'button',
				props: {
					type: 'primary'
				},
				label: '搜索',
				event: 'list'
			},
			search: {
				slot: 'searchs',
				type: 'button',
				props: {
					type: 'primary'
				},
				label: '搜索',
				event: 'list'
			},
			reset: {
				slot: 'searchs',
				type: 'reset',
				label: '重置'
			},
			addItem: {
				type: "button",
				label: "新建",
				props: {
					type: "primary"
				},
				slot: "searchs"
			},
			editItem: {
				type: 'button',
				label: '编辑',
				props: {
					type: 'primary',
					icon: 'el-icon-edit'
				}
			},
			removeItem: {
				type: 'button',
				props: {
					type: 'danger',
					icon: 'el-icon-delete',
					circle: true
				}
			}
		},
		actions: {
			addItem: function() {
				this.$message('这是”新建“按钮事件响应Demo效果，可在区块配置的“actions”里修改～')
			},
			editItem: function() {
				this.$message('这是”编辑“按钮事件响应Demo效果，可在区块配置的“actions”里修改～')
			},
			removeItem: function() {
				this.$message('这是”删除“按钮事件响应Demo效果，可在区块配置的“actions”里修改～')
			},
			reset: function() {
				this.$message('这是”重置“按钮事件响应Demo效果，可在区块配置的“actions”里修改～')
			}
		}
	}
};
