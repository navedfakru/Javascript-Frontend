def merge_sort(arr):
    # Base case: if the array has 1 or 0 elements, it's already sorted
    if len(arr) <= 1:
        return arr
    
    # Split the array into two halves
    mid = len(arr) // 2
    left_half = merge_sort(arr[:mid])
    right_half = merge_sort(arr[mid:])
    
    # Merge the sorted halves
    return merge(left_half, right_half)

def merge(left, right):
    merged = []
    i = j = 0
    
    # Merge elements from both halves in sorted order
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1
    
    # Add any remaining elements from the left half
    while i < len(left):
        merged.append(left[i])
        i += 1
    
    # Add any remaining elements from the right half
    while j < len(right):
        merged.append(right[j])
        j += 1
    
    return merged

# Example usage:
arr = [38, 27, 43, 3, 9, 82, 10, 12, 32, 1, 2, 3, 44, 23, 42, 42]
sorted_arr = merge_sort(arr)
print("Sorted array:", sorted_arr)
