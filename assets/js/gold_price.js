// Функция для получения и отображения цены золота
        async function fetchGoldPrice() {
            try {
                const response = await fetch('https://api.gold-api.com/price/XAU');
                const data = await response.json();
                
                if (data && data.price) {
                    // Конвертируем цену из унций в граммы (1 унция = 31.10 грамма)
                    const pricePerGram = (data.price / 31.10).toFixed(2);
                    
                    // Форматируем вывод
                    const formattedPrice = `Precio de Oro (Au): $${pricePerGram} /g`;
                    
                    // Обновляем div
                    document.getElementById('goldPrice').textContent = formattedPrice;
                } else {
                    document.getElementById('goldPrice').textContent = 'Error: Could not fetch gold price';
                }
            } catch (error) {
                console.error('Error fetching gold price:', error);
                document.getElementById('goldPrice').textContent = 'Error: Could not fetch gold price';
            }
        }

        // Вызываем функцию при загрузке страницы
        document.addEventListener('DOMContentLoaded', fetchGoldPrice);
        
        // Также можно обновлять цену при обновлении страницы
        window.addEventListener('load', fetchGoldPrice);