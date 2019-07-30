default: test
.PHONY: default

install_prerequisites:
	npm install
.PHONY: install_prerequisites

generate_tests:
	hiptest-publisher -c cucumber-js.conf -t "$(SECRET_TOKEN)" --without=actionwords
.PHONY: generate_tests

test: install_prerequisites
	node_modules/.bin/cucumber-js
.PHONY: test
