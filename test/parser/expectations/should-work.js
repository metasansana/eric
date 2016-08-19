const x = {
    'type': 'task-file',
    'imports': [{
        'type': 'import-statement',
        'member': {
            'type': 'default-member',
            'member': 'Gen'
        },
        'module': {
            'type': 'string-literal',
            'value': '\'taino/lib/Generator\''
        },
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 38
        }
    }, {
        'type': 'import-statement',
        'member': {
            'type': 'default-member',
            'member': 'Wizard'
        },
        'module': {
            'type': 'string-literal',
            'value': '\'taino/lib/Wizard\''
        },
        'location': {
            'first_line': 2,
            'last_line': 2,
            'first_column': 0,
            'last_column': 38
        }
    }],
    'tasks': [{
        'type': 'task-statement',
        'name': 'init',
        'parent': 'Gen',
        'body': [{
            'type': 'property-assignment',
            'name': 'context',
            'value': {
                'type': 'object-literal',
                'keys': [{
                    'key': 'n',
                    'value': {
                        'type': 'string-literal',
                        'value': '\'one\''
                    }
                }],
                'location': {
                    'first_line': 5,
                    'last_line': 5,
                    'first_column': 11,
                    'last_column': 20
                }
            }
        }, {
            'type': 'function-expression',
            'name': 'file',
            'arguments': [{
                'type': 'string-literal',
                'value': '\'LICENSE\''
            }, {
                'type': 'string-literal',
                'value': '\'LICENSE\''
            }]
        }],
        'location': {
            'first_line': 4,
            'last_line': 7,
            'first_column': 0,
            'last_column': 1
        }
    }, {
        'type': 'task-statement',
        'name': 'generateEndPointTests',
        'parent': 'Gen',
        'body': [{
            'type': 'property-assignment',
            'name': 'templatePath',
            'value': {
                'type': 'property-expression',
                'path': 'process.env.TEMPLATE_PATH'
            }
        }, {
            'type': 'property-assignment',
            'name': 'list',
            'value': {
                'type': 'array-literal',
                'members': [{
                    'type': 'number-literal',
                    'value': '1',
                    'location': {
                        'first_line': 12,
                        'last_line': 12,
                        'first_column': 12,
                        'last_column': 13
                    }
                }, {
                    'type': 'number-literal',
                    'value': '2',
                    'location': {
                        'first_line': 12,
                        'last_line': 12,
                        'first_column': 15,
                        'last_column': 16
                    }
                }, {
                    'type': 'object-literal',
                    'keys': [],
                    'location': {
                        'first_line': 12,
                        'last_line': 12,
                        'first_column': 18,
                        'last_column': 20
                    }
                }]
            }
        }, {
            'type': 'function-expression',
            'name': 'file',
            'arguments': [{
                'type': 'string-literal',
                'value': '\'test/products\''
            }, {
                'type': 'string-literal',
                'value': '\'endpoint.template\''
            }, {
                'type': 'object-literal',
                'keys': [{
                    'key': '"id"',
                    'value': {
                        'type': 'method-expression',
                        'path': 'this.someMethod',
                        'arguments': []
                    }
                }, {
                    'key': '"collection"',
                    'value': {
                        'type': 'string-literal',
                        'value': '"products"'
                    }
                }, {
                    'key': '"records_file"',
                    'value': {
                        'type': 'string-literal',
                        'value': '"./assets/products.json"'
                    }
                }, {
                    'key': '"new"',
                    'value': {
                        'type': 'object-literal',
                        'keys': [{
                            'key': '"name"',
                            'value': {
                                'type': 'string-literal',
                                'value': '"Wizbang Widget"'
                            }
                        }, {
                            'key': '"manufacturer"',
                            'value': {
                                'type': 'string-literal',
                                'value': '"Wizbang"'
                            }
                        }, {
                            'key': '"description"',
                            'value': {
                                'type': 'string-literal',
                                'value': '"It wizzes it bangs"'
                            }
                        }, {
                            'key': '"category"',
                            'value': {
                                'type': 'string-literal',
                                'value': '"Bangers"'
                            }
                        }],
                        'location': {
                            'first_line': 17,
                            'last_line': 22,
                            'first_column': 19,
                            'last_column': 13
                        }
                    }
                }],
                'location': {
                    'first_line': 13,
                    'last_line': 23,
                    'first_column': 47,
                    'last_column': 9
                }
            }]
        }, {
            'type': 'function-expression',
            'name': 'file',
            'arguments': [{
                'type': 'string-literal',
                'value': '\'test/products\''
            }, {
                'type': 'string-literal',
                'value': '\'endpoint.template\''
            }, {
                'type': 'object-literal',
                'keys': [{
                    'key': '"id"',
                    'value': {
                        'type': 'string-literal',
                        'value': '"id"'
                    }
                }, {
                    'key': '"collection"',
                    'value': {
                        'type': 'property-expression',
                        'path': 'this.someValue'
                    }
                }, {
                    'key': '"records_file"',
                    'value': {
                        'type': 'string-literal',
                        'value': '"./assets/products.json"'
                    }
                }, {
                    'key': '"new"',
                    'value': {
                        'type': 'object-literal',
                        'keys': [{
                            'key': '"name"',
                            'value': {
                                'type': 'string-literal',
                                'value': '"Wizbang Widget"'
                            }
                        }, {
                            'key': '"manufacturer"',
                            'value': {
                                'type': 'string-literal',
                                'value': '"Wizbang"'
                            }
                        }, {
                            'key': '"description"',
                            'value': {
                                'type': 'string-literal',
                                'value': '"It wizzes it bangs"'
                            }
                        }, {
                            'key': '"category"',
                            'value': {
                                'type': 'string-literal',
                                'value': '"Bangers"'
                            }
                        }],
                        'location': {
                            'first_line': 29,
                            'last_line': 34,
                            'first_column': 19,
                            'last_column': 13
                        }
                    }
                }],
                'location': {
                    'first_line': 25,
                    'last_line': 36,
                    'first_column': 47,
                    'last_column': 5
                }
            }]
        }, {
            'type': 'function-expression',
            'name': 'file',
            'arguments': [{
                'type': 'string-literal',
                'value': '\'test/products\''
            }, {
                'type': 'string-literal',
                'value': '\'endpoint.template\''
            }, {
                'type': 'object-literal',
                'keys': [{
                    'key': '"id"',
                    'value': {
                        'type': 'string-literal',
                        'value': '"id"'
                    }
                }, {
                    'key': '"collection"',
                    'value': {
                        'type': 'string-literal',
                        'value': '"products"'
                    }
                }, {
                    'key': '"records_file"',
                    'value': {
                        'type': 'string-literal',
                        'value': '"./assets/products.json"'
                    }
                }, {
                    'key': '"new"',
                    'value': {
                        'type': 'object-literal',
                        'keys': [{
                            'key': '"name"',
                            'value': {
                                'type': 'string-literal',
                                'value': '"Wizbang Widget"'
                            }
                        }, {
                            'key': '"manufacturer"',
                            'value': {
                                'type': 'string-literal',
                                'value': '"Wizbang"'
                            }
                        }, {
                            'key': '"description"',
                            'value': {
                                'type': 'string-literal',
                                'value': '"It wizzes it bangs"'
                            }
                        }, {
                            'key': '"category"',
                            'value': {
                                'type': 'string-literal',
                                'value': '"Bangers"'
                            }
                        }],
                        'location': {
                            'first_line': 42,
                            'last_line': 47,
                            'first_column': 19,
                            'last_column': 13
                        }
                    }
                }],
                'location': {
                    'first_line': 38,
                    'last_line': 48,
                    'first_column': 47,
                    'last_column': 5
                }
            }]
        }],
        'location': {
            'first_line': 9,
            'last_line': 50,
            'first_column': 0,
            'last_column': 1
        }
    }]
};

export default x;
