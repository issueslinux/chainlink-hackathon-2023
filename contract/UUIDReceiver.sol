pragma solidity ^0.8.0;

contract UUIDReceiver {
    uint public x;
    uint public y;
    bytes32 public receivedUUID;

    // Funkcja fallback wywoływana jest przy otrzymaniu ETH bez wywołania funkcji
    fallback() external payable {
        x = 2; // Ustawienie zmiennej x na 2
        y = msg.value; // Przechwycenie przekazanej wartości ETH i zapisanie jej do zmiennej y
        
        // Sprawdzenie długości przesłanych danych
        require(msg.data.length >= 32, "Data length should be at least 32 bytes");

        // Dekodowanie przesłanych danych do bytes32 przy użyciu abi.decode
        receivedUUID = bytesToBytes32(msg.data);
    }

    // Konwersja bytes do bytes32 (jeśli przekazane dane mają długość 32 bajty)
    function bytesToBytes32(bytes memory data) internal pure returns (bytes32 result) {
        assembly {
            result := mload(add(data, 32))
        }
    }
}
