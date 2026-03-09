# Projektpfade
HASKELL_DIR = haskell
NODE_DIR    = node
SOCKET      = $(HASKELL_DIR)/elektro.sock

# Programme
CABAL = cabal
NODE  = node

# Default target
.PHONY: all
all: run

# ---------------------------------------------------------
# Build targets
# ---------------------------------------------------------

.PHONY: build-hs
build-hs:
	cd $(HASKELL_DIR) && $(CABAL) build

.PHONY: build-node
build-node:
	cd $(NODE_DIR) && npm install --silent || true

# ---------------------------------------------------------
# Run targets
# ---------------------------------------------------------

# Haskell IPC Server starten
.PHONY: run-hs
run-hs: build-hs
    cd $(HASKELL_DIR) && $(CABAL) run mylib-ipc

# Node Server starten
.PHONY: run-node
run-node: build-node
    cd $(NODE_DIR) && $(NODE) server.mjs

# Beide Server parallel starten
.PHONY: run
run:
	@echo "Starte Haskell-IPC-Server und Node-Server..."
	@$(MAKE) -j2 run-hs run-node

# ---------------------------------------------------------
# Cleanup
# ---------------------------------------------------------

.PHONY: clean
clean:
	cd $(HASKELL_DIR) && $(CABAL) clean
	rm -f $(SOCKET)

.PHONY: kill
kill:
	@echo "Beende alle laufenden Haskell- und Node-Prozesse..."
	-pkill -f "mylib-ipc" || true
	-pkill -f "server.mjs" || true
	rm -f $(SOCKET)
